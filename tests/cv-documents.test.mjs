import assert from "node:assert/strict";
import test from "node:test";
import { accessSync, constants, readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const documents = new URL("../public/documents/", import.meta.url);

for (const language of ["es", "en"]) {
    test(`the ${language} CV header includes the accessible existing profile photo`, () => {
        const document = new URL(`cv-${language}.html`, documents);
        const html = readFileSync(document, "utf8");
        const header = html.match(/<header\b[^>]*>([\s\S]*?)<\/header>/)?.[1];
        assert.ok(header, "CV has a header");
        const photo = header.match(/<img\b[^>]*>/)?.[0];
        assert.ok(photo, "header includes a profile photograph");
        const source = photo.match(/\bsrc="([^"]+)"/)?.[1];
        assert.equal(source, "../images/maria-alejandra-ortiz.jpeg");
        const alt = language === "es"
            ? "Fotografía de María Alejandra Ortiz Páez"
            : "Portrait of María Alejandra Ortiz Páez";
        assert.ok(photo.includes(`alt="${alt}"`), "portrait has localized descriptive alt text");
        const image = new URL(source, document);
        accessSync(image, constants.R_OK);
        assert.deepEqual(readFileSync(image).subarray(0, 3), Buffer.from([0xff, 0xd8, 0xff]));
    });

    test(`the ${language} CV PDF embeds the profile photograph`, () => {
        const pdf = readFileSync(new URL(`cv-${language}.pdf`, documents), "latin1");
        assert.ok(/\/Subtype\s*\/Image\b/.test(pdf), "PDF includes an embedded image object");
    });

    test(`the ${language} CV preserves source facts in an editable document and a two-page PDF`, t => {
        const html = readFileSync(new URL(`cv-${language}.html`, documents), "utf8");
        assert.ok(html.includes(`<html lang="${language}">`));
        assert.match(html, /href="cv.css"/);
        assert.match(html, /María Alejandra Ortiz Páez/);
        for (const fact of ["TreesSide Developers", "GHT", "2026", "2013–2024", "80", "14",
            "malejawork12@gmail.com", "+57 305 717 3986", "Bendita Gracia", "La Lupe",
            "React", "Next.js", "Cloudflare Workers", "Power Automate", "n8n", "ISO 27001"]) {
            assert.ok(html.includes(fact), fact);
        }
        assert.match(html, language === "es" ? /Noviembre|noviembre/ : /November/);
        assert.doesNotMatch(html, /Bachelor|Master|fluent|B2|C1|bilingüe|inglés avanzado/i);
        const pdf = new URL(`cv-${language}.pdf`, documents);
        assert.equal(readFileSync(pdf).subarray(0, 5).toString(), "%PDF-");
        const extraction = spawnSync("pdftotext", ["-enc", "UTF-8", "-layout", fileURLToPath(pdf), "-"], { encoding: "utf8" });
        if (extraction.error?.code === "ENOENT") {
            t.skip("pdftotext unavailable: PDF text/page verification not run");
            return;
        }
        assert.equal(extraction.status, 0, extraction.stderr);
        const pages = extraction.stdout.split("\f").filter(page => page.trim());
        assert.equal(pages.length, 2);
        assert.match(pages[0], /TreesSide Developers/);
        assert.match(pages[0], /GHT/);
        assert.match(pages[1], /Bendita Gracia/);
        assert.match(pages[1], /2013.*2024/);
        assert.match(pages[1], language === "es" ? /noviembre de 2026/ : /November 2026/);
        assert.match(extraction.stdout, /María Alejandra Ortiz Páez/);
        assert.match(extraction.stdout, language === "es" ? /Perfil profesional/i : /Professional profile/i);
    });
}
