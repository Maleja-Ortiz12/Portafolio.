import assert from "node:assert/strict";
import test from "node:test";
import { getTechnologyColor } from "../data/technology-colors.ts";

test("programming languages have distinct readable colors and unknown tools have a fallback", () => {
    const names = ["JavaScript", "TypeScript", "PHP", "Python", "C++", "C#", "Dart"];
    const colors = names.map(getTechnologyColor);
    assert.equal(new Set(colors).size, names.length);
    for (const color of [...colors, getTechnologyColor("Unknown tool")]) {
        assert.match(color, /^#[0-9a-f]{6}$/i);
        const luminance = hex => {
            const rgb = hex.slice(1).match(/../g).map(part => parseInt(part, 16) / 255);
            const linear = rgb.map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
            return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
        };
        assert.ok((luminance(color) + 0.05) / (luminance("#0f172a") + 0.05) >= 4.5, color);
    }
});
