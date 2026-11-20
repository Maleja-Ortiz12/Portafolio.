import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { translations } from "../data/translations.ts";

function assertEducationCertificates(html, language) {
    const { certificateLabel, eduItems } = translations[language].skills;
    const cards = [...html.matchAll(/<h4\b[^>]*>([\s\S]*?)<\/h4>([\s\S]*?)(?=<h4\b|$)/g)];
    const expectedFiles = [
        "/documents/certificado-tecnologo.pdf",
        "/documents/Certificado_Mujeres_Digitales.pdf",
    ];
    for (const [index, item] of eduItems.entries()) {
        const card = cards.find(([, title]) => title === item.title);
        assert.ok(card, item.title);
        const anchors = [...card[2].matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)];
        assert.equal(anchors.length, index < 2 ? 1 : 0, item.title);
        if (index < 2) {
            assert.ok(anchors[0][1].includes(`href="${expectedFiles[index]}"`), item.title);
            assert.match(anchors[0][1], /target="_blank"/);
            assert.match(anchors[0][1], /rel="noopener noreferrer"/);
            assert.equal(anchors[0][2].replace(/<[^>]*>/g, "").trim(), certificateLabel);
        }
    }
    const certificateLinks = [...html.matchAll(/href="(\/documents\/[^"]+)"/g)]
        .map(([, href]) => href).filter(href => !href.startsWith("/documents/cv-"));
    assert.deepEqual(certificateLinks.sort(), [...expectedFiles].sort());
}

for (const language of ["es", "en"]) {
    test(`the ${language} portfolio renders current CV facts and its own PDF download`, () => {
        const result = spawnSync(process.execPath, ["-e", `
            const fs = require("node:fs");
            const path = require("node:path");
            const Module = require("node:module");
            const ts = require("typescript");
            const React = require("react");
            const { renderToStaticMarkup } = require("react-dom/server");
            const translations = require("./data/translations.ts").translations;
            const language = ${JSON.stringify(language)};
            const cache = new Map();
            function load(filename) {
                if (cache.has(filename)) return cache.get(filename).exports;
                const mod = new Module(filename);
                mod.filename = filename;
                mod.paths = Module._nodeModulePaths(path.dirname(filename));
                cache.set(filename, mod);
                const nativeRequire = mod.require.bind(mod);
                mod.require = name => {
                    if (name === "@/context/LanguageContext") {
                        return { useLanguage: () => ({ t: translations[language], language }) };
                    }
                    if (!name.startsWith("@/")) return nativeRequire(name);
                    const base = path.resolve(name.slice(2));
                    return load([base + ".tsx", base + ".ts"].find(fs.existsSync));
                };
                const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
                    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true }
                });
                mod._compile(outputText, filename);
                return mod.exports;
            }
            const html = ["Hero", "About", "Skills", "Experience"].map(name => {
                const Component = load(path.resolve("components/" + name + ".tsx")).default;
                return renderToStaticMarkup(React.createElement(Component));
            }).join("\\n");
            // Certificate ownership must follow the record, not its timeline position.
            translations[language].skills.eduItems.reverse();
            const Skills = load(path.resolve("components/Skills.tsx")).default;
            const reorderedSkills = renderToStaticMarkup(React.createElement(Skills));
            process.stdout.write(JSON.stringify({ html, reorderedSkills }));
        `], { cwd: new URL("../", import.meta.url), encoding: "utf8", timeout: 10000 });
        assert.equal(result.status, 0, result.stderr);
        const { html, reorderedSkills } = JSON.parse(result.stdout);
        assertEducationCertificates(html, language);
        assertEducationCertificates(reorderedSkills, language);
        assert.ok(html.includes(`href="/documents/cv-${language}.pdf"`));
        assert.ok(html.includes(`download="Maria-Alejandra-Ortiz-CV-${language.toUpperCase()}.pdf"`));
        for (const fact of ["TreesSide Developers", "Next.js", "Cloudflare Workers", "SIEM", "NIST", "ISO 27001", "Power Automate", "n8n"]) {
            assert.ok(html.includes(fact), fact);
        }
        assert.match(html, language === "es" ? /Desarrolladora Full Stack/ : /Full-Stack Developer/);
        assert.match(html, language === "es" ? /2026–actualidad/ : /2026–present/);
        assert.match(html, language === "es" ? /Certificada · noviembre de 2026/ : /Certified · November 2026/);
        assert.match(html, /href="\/documents\/certificado-tecnologo.pdf"/);
        assert.doesNotMatch(html, /GHT|primera oportunidad|first junior developer opportunity/);
    });
}
