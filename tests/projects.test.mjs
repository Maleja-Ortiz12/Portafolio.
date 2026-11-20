import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { translations } from "../data/translations.ts";
import { getFeaturedProjects, filterProjects } from "../data/projects.ts";

test("featured catalogue only includes published websites without duplicate salon entries", () => {
    for (const locale of ["es", "en"]) {
        const projects = getFeaturedProjects(translations[locale].projects);
        assert.equal(projects.length, 5);
        assert.equal(new Set(projects.map(project => project.id)).size, 5);
        assert.ok(!projects.some(project => ["sena-capstone", "unity-2d"].includes(project.id)));
        assert.equal(projects.filter(project => /upt.?ownhair/i.test(project.title)).length, 1);
        assert.ok(!projects.some(project => ["inventory", "agriculture-mobile"].includes(project.id)));
        assert.ok(projects.every(project => project.demo === "/" || /^https?:\/\//.test(project.demo ?? "")));
        assert.deepEqual(projects.map(project => project.id), [
            "dimension-shift", "uptownhair", "bendita-gracia", "la-lupe", "treesside-developers",
        ]);
        assert.ok(!projects.some(project => ["entrelanas", "portfolio", "emisoras"].includes(project.id)));
    }
});

test("requested websites have bilingual copy, exact live links and local extracted photos", () => {
    const expected = [
        ["bendita-gracia", "Bendita Gracia", "https://bendita-gracia.benditagraciaccesorios1.workers.dev/", "/images/bendita-gracia.webp"],
        ["la-lupe", "La Lupe", "https://lalupe.co/", "/images/la-lupe.webp"],
        ["treesside-developers", "TreesSide Developers", "https://treesside-developers.malejawork12.workers.dev/", "/images/treesside-developers.webp"],
    ];
    for (const [id, title, demo, image] of expected) {
        const localized = ["es", "en"].map(locale => getFeaturedProjects(translations[locale].projects).find(project => project.id === id));
        for (const project of localized) {
            assert.ok(project, id);
            assert.equal(project.title, title);
            assert.equal(project.demo, demo);
            assert.equal(project.image, image);
            assert.equal(project.category, "frontend");
            assert.ok(project.description && project.detailedDescription);
            const bytes = readFileSync(new URL(`../public${project.image}`, import.meta.url));
            assert.equal(bytes.toString("ascii", 0, 4), "RIFF");
            assert.equal(bytes.toString("ascii", 8, 12), "WEBP");
            assert.ok(bytes.length > 1000);
        }
        assert.notEqual(localized[0].description, localized[1].description);
        assert.notEqual(localized[0].detailedDescription, localized[1].detailedDescription);
    }
});

test("existing project destinations and identities stay unchanged", () => {
    const projects = getFeaturedProjects(translations.es.projects);
    assert.equal(projects.find(project => project.id === "dimension-shift").demo, "https://malejaconeja12.itch.io/dimension-shift");
    assert.equal(projects.find(project => project.id === "uptownhair").demo, "https://uptownhair-front-production.up.railway.app/");
    assert.match(projects.find(project => project.id === "dimension-shift").description, /3D/);
});

test("category filtering works for all projects and keeps the same identities across languages", () => {
    for (const category of ["all", "gamedev", "frontend", "fullstack", "backend", "mobile"]) {
        const spanish = filterProjects(getFeaturedProjects(translations.es.projects), category);
        const english = filterProjects(getFeaturedProjects(translations.en.projects), category);
        if (["backend", "mobile"].includes(category)) assert.equal(spanish.length, 0);
        else assert.ok(spanish.length > 0, category);
        assert.deepEqual(spanish.map(project => project.id), english.map(project => project.id));
        if (category === "all") assert.equal(spanish.length, 5);
        else assert.ok(spanish.every(project => project.category === category));
    }
});
