import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

// Isolate Motion's module-level media-query cache for each rendering environment.
function renderProjects(preference) {
    const result = spawnSync(process.execPath, ["-e", `
        const fs = require("node:fs");
        const path = require("node:path");
        const Module = require("node:module");
        const ts = require("typescript");
        const preference = ${JSON.stringify(preference)};
        if (preference !== null) {
            global.window = {
                addEventListener() {}, removeEventListener() {},
                matchMedia: () => ({
                    matches: preference, addEventListener() {}, removeEventListener() {}
                })
            };
        }
        const cache = new Map();
        function load(filename) {
            if (cache.has(filename)) return cache.get(filename).exports;
            const mod = new Module(filename);
            mod.filename = filename;
            mod.paths = Module._nodeModulePaths(path.dirname(filename));
            cache.set(filename, mod);
            const nativeRequire = mod.require.bind(mod);
            mod.require = name => {
                if (!name.startsWith("@/")) return nativeRequire(name);
                const base = path.resolve(name.slice(2));
                const resolved = [base + ".tsx", base + ".ts"].find(fs.existsSync);
                return load(resolved);
            };
            const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
                compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
            });
            mod._compile(outputText, filename);
            return mod.exports;
        }
        const React = require("react");
        const { renderToString } = require("react-dom/server");
        const { LanguageProvider } = load(path.resolve("context/LanguageContext.tsx"));
        const Projects = load(path.resolve("components/Projects.tsx")).default;
        const html = renderToString(React.createElement(LanguageProvider, null, React.createElement(Projects)));
        const cards = [...html.matchAll(/<div[^>]*class="project-card [^>]+>/g)].map(match => match[0]);
        console.log(JSON.stringify({ cards, html }));
    `], { cwd: new URL("../", import.meta.url), encoding: "utf8", timeout: 10000 });
    assert.equal(result.status, 0, result.stderr);
    return JSON.parse(result.stdout.trim());
}

test("project cards have identical visible initial markup on server and either motion preference", () => {
    const server = renderProjects(null).cards;
    assert.equal(server.length, 5);
    for (const preference of [false, true]) {
        assert.deepEqual(renderProjects(preference).cards, server);
    }
    for (const card of server) {
        assert.match(card, /style="opacity:1;transform:none"/);
    }
});

test("unpublished development projects and empty categories are not rendered", () => {
    const { html } = renderProjects(null);
    assert.doesNotMatch(html, /AgroSoft|Sinergia|Proyectos en Desarrollo/);
    assert.doesNotMatch(html, />Backend<|>Móvil</);
    assert.match(html, /TreesSide Developers/);
    assert.match(html, /aria-pressed="true"[^>]*>Todos</);
});
