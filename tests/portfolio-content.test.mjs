import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { translations } from "../data/translations.ts";

test("the Spanish profile reflects the supplied CV instead of pre-internship status", () => {
    const { hero, about, experience, skills } = translations.es;
    assert.equal(hero.role, "Desarrolladora Full Stack");
    assert.match(about.p1, /tecnóloga certificada en Análisis y Desarrollo de Software del SENA/);
    assert.doesNotMatch(about.p1, /certificación en trámite/);
    assert.doesNotMatch(about.p1 + about.p2, /próxima a iniciar|finalizando mi etapa lectiva/);
    assert.equal(experience.items.length, 2);
    assert.equal(experience.items[0].company, "TreesSide Developers");
    assert.equal(experience.items[0].period, "2026–actualidad");
    assert.equal(hero.available, "Disponible para oportunidades laborales y proyectos de innovación y crecimiento empresarial");
    assert.doesNotMatch(JSON.stringify({ hero, about, experience }), /GHT|primera oportunidad/);
    assert.equal(experience.items[1].role, "Practicante en Ciberseguridad");
    assert.equal(experience.items[1].company, "");
    assert.equal(experience.items[1].period, "Abril–octubre de 2026");
    for (const term of ["SIEM", "WAF", "Cortex", "NIST", "ISO 27001", "N-central", "Mantis", "Excel"]) {
        assert.ok(experience.items[1].description.includes(term), term);
    }
    assert.equal(skills.eduItems[0].year, "Certificada · noviembre de 2026");
    assert.equal(skills.eduItems[1].institution, "SENA / AHK Colombia / Organización KEY");
    assert.match(skills.eduItems[1].description, /80.*14/);
    assert.equal(skills.eduItems[2].year, "2013–2024");
    assert.match(skills.eduItems[3].title, /Python y C\+\+/);
});

test("both languages preserve CV facts and internship privacy without first-opportunity positioning", () => {
    for (const language of ["es", "en"]) {
        const { hero, projects, skills, experience } = translations[language];
        assert.equal(hero.focusAreas.length, 3);
        assert.match(hero.focusAreas[0].description, /React.*NestJS.*Laravel.*Flutter.*Unity/);
        assert.match(hero.focusAreas[1].description, /SIEM.*NIST.*ISO 27001/);
        assert.match(hero.focusAreas[2].description, /Excel.*Power Automate.*n8n/);
        assert.equal(hero.cvFile, `/documents/cv-${language}.pdf`);
        assert.equal(hero.cvDownload, `Maria-Alejandra-Ortiz-CV-${language.toUpperCase()}.pdf`);
        assert.equal(skills.groups.length, 6);
        assert.equal(skills.eduItems.length, 4);
        assert.equal(experience.items[0].company, "TreesSide Developers");
        assert.equal(experience.items[1].company, "");
        assert.doesNotMatch(JSON.stringify({ hero, experience, about: translations[language].about }), /GHT|first junior developer opportunity|primera oportunidad/);
        assert.equal(projects.cvTitle, undefined);
        assert.equal(projects.cvHint, undefined);
        assert.equal(projects.cvItems.length, 5);
        assert.deepEqual(projects.cvItems.map(item => item.stack), [
            "React · NestJS · PostgreSQL · TypeScript", "PHP · Laravel",
            "JavaScript · HTML · CSS", "Flutter · Dart", "C# · Unity",
        ]);
        for (const item of projects.cvItems) {
            assert.ok(item.title && item.description);
            assert.equal(item.demo, undefined);
            assert.equal(item.github, undefined);
        }
        // Original translations remain available to the unified catalogue.
        assert.equal(projects.items.length, 8);
        assert.equal(projects.items[0].title, "Dimension Shift");
    }
    assert.equal(translations.en.hero.role, "Full-Stack Developer");
    assert.match(translations.en.about.p1, /certified Software Analysis and Development technologist/);
    assert.doesNotMatch(translations.en.about.p1, /certification is pending/);
    assert.equal(translations.en.skills.eduItems[0].year, "Certified · November 2026");
    assert.equal(translations.en.experience.items[0].period, "2026–present");
    assert.equal(translations.en.experience.items[1].period, "April–October 2026");
});

test("the awarded qualification links to the uploaded certificate in both languages", () => {
    for (const language of ["es", "en"]) {
        const { certificateFile, certificateLabel, eduItems } = translations[language].skills;
        assert.deepEqual(eduItems.map(item => item.certificateFile), [
            "/documents/certificado-tecnologo.pdf",
            "/documents/Certificado_Mujeres_Digitales.pdf",
            undefined,
            undefined,
        ]);
        assert.equal(certificateFile, "/documents/certificado-tecnologo.pdf");
        assert.equal(certificateLabel, language === "es" ? "Ver certificado" : "View certificate");
        const pdf = readFileSync(new URL("../public" + certificateFile, import.meta.url));
        assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
    }
});
