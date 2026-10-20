import assert from "node:assert/strict";
import test from "node:test";
import { translations } from "../data/translations.ts";
import { getFeaturedProjects, filterProjects } from "../data/projects.ts";

test("featured catalogue combines existing work and missing CV projects without duplicate salon entries", () => {
    for (const locale of ["es", "en"]) {
        const projects = getFeaturedProjects(translations[locale].projects);
        assert.equal(projects.length, 7);
        assert.equal(new Set(projects.map(project => project.id)).size, 7);
        assert.ok(!projects.some(project => ["sena-capstone", "unity-2d"].includes(project.id)));
        assert.equal(projects.filter(project => /upt.?ownhair/i.test(project.title)).length, 1);
        for (const id of ["inventory", "agriculture-mobile"]) {
            const project = projects.find(project => project.id === id);
            assert.ok(project, id);
            assert.ok(project.title && project.description && project.detailedDescription);
            assert.equal(project.demo, undefined);
            assert.equal(project.image, undefined);
        }
        assert.deepEqual(projects.find(project => project.id === "agriculture-mobile").tech, ["Flutter", "Dart"]);
    }
});

test("existing project destinations and identities stay unchanged", () => {
    const projects = getFeaturedProjects(translations.es.projects);
    assert.equal(projects.find(project => project.id === "dimension-shift").demo, "https://malejaconeja12.itch.io/dimension-shift");
    assert.equal(projects.find(project => project.id === "emisoras").demo, "https://www.emisoraslatinas.online/");
    assert.equal(projects.find(project => project.id === "uptownhair").demo, "https://uptownhair-front-production.up.railway.app/");
    assert.equal(projects.find(project => project.id === "entrelanas").demo, "https://tejenderasfrontend-production.up.railway.app/");
    assert.match(projects.find(project => project.id === "dimension-shift").description, /3D/);
    assert.equal(projects.find(project => project.id === "portfolio").image, "/documents/fondo_portafolio.JPG");
});

test("category filtering works for all projects and keeps the same identities across languages", () => {
    for (const category of ["all", "gamedev", "frontend", "fullstack", "backend", "mobile"]) {
        const spanish = filterProjects(getFeaturedProjects(translations.es.projects), category);
        const english = filterProjects(getFeaturedProjects(translations.en.projects), category);
        assert.ok(spanish.length > 0, category);
        assert.deepEqual(spanish.map(project => project.id), english.map(project => project.id));
        if (category === "all") assert.equal(spanish.length, 7);
        else assert.ok(spanish.every(project => project.category === category));
    }
});
