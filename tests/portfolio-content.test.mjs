import assert from "node:assert/strict";
import test from "node:test";
import { translations } from "../data/translations.ts";

test("the Spanish profile reflects the supplied CV instead of pre-internship status", () => {
    const { hero, about, experience, skills } = translations.es;
    assert.equal(hero.role, "Desarrolladora de Software Junior");
    assert.match(about.p1, /certificación en trámite/);
    assert.doesNotMatch(about.p1 + about.p2, /próxima a iniciar|finalizando mi etapa lectiva/);
    assert.equal(experience.items.length, 1);
    assert.equal(experience.items[0].company, "");
    assert.equal(hero.available, "Disponible para oportunidades laborales y proyectos de innovación y crecimiento empresarial");
    assert.doesNotMatch(JSON.stringify({ hero, about, experience }), /GHT|primera oportunidad/);
    assert.equal(experience.items[0].role, "Practicante en Ciberseguridad");
    assert.equal(experience.items[0].period, "Abril–octubre de 2026");
    for (const term of ["SIEM", "WAF", "Cortex", "NIST", "ISO 27001", "N-central", "Mantis", "Excel"]) {
        assert.ok(experience.items[0].description.includes(term), term);
    }
    assert.equal(skills.eduItems[0].year, "Octubre de 2026 · Certificación en trámite");
    assert.equal(skills.eduItems[1].institution, "SENA / AHK Colombia / Organización KEY");
    assert.match(skills.eduItems[1].description, /80.*14/);
    assert.equal(skills.eduItems[2].year, "2013–2024");
    assert.match(skills.eduItems[3].title, /Python y C\+\+/);
});

test("both languages preserve CV facts without employer names or first-opportunity positioning", () => {
    for (const language of ["es", "en"]) {
        const { hero, projects, skills, experience } = translations[language];
        assert.equal(hero.focusAreas.length, 3);
        assert.match(hero.focusAreas[0].description, /React.*NestJS.*Laravel.*Flutter.*Unity/);
        assert.match(hero.focusAreas[1].description, /SIEM.*NIST.*ISO 27001/);
        assert.match(hero.focusAreas[2].description, /Excel.*Power Automate.*n8n/);
        assert.equal(hero.cvFile, "/documents/maria-alejandra-ortiz-cv.pdf");
        assert.equal(skills.groups.length, 6);
        assert.equal(skills.eduItems.length, 4);
        assert.equal(experience.items[0].company, "");
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
        assert.equal(projects.items.length, 5);
        assert.equal(projects.items[0].title, "Dimension Shift");
    }
    assert.equal(translations.en.hero.role, "Junior Software Developer");
    assert.match(translations.en.about.p1, /certification is pending/);
    assert.equal(translations.en.experience.items[0].period, "April–October 2026");
});
