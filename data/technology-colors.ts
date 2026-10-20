const colors: Record<string, string> = {
    JavaScript: "#facc15", TypeScript: "#60a5fa", PHP: "#c4b5fd",
    Python: "#fde047", "C++": "#93c5fd", "C#": "#f0abfc", Dart: "#67e8f9",
    React: "#67e8f9", HTML: "#fdba74", CSS: "#a5b4fc", NestJS: "#fda4af",
    Laravel: "#fca5a5", "Node.js": "#86efac", Flutter: "#7dd3fc",
    Unity: "#e2e8f0", "Unity (C#)": "#e2e8f0", "Unity 3D": "#e2e8f0",
    MySQL: "#fdba74", PostgreSQL: "#93c5fd", "Git / GitHub": "#fca5a5",
    Docker: "#7dd3fc", Linux: "#fde68a", Excel: "#86efac",
    "Power Automate": "#a5b4fc", n8n: "#fda4af", "Next.js": "#f1f5f9",
    "Tailwind CSS": "#67e8f9", "Framer Motion": "#f0abfc",
    SIEM: "#5eead4", WAF: "#93c5fd", Cortex: "#fdba74",
    "N-central": "#c4b5fd", Mantis: "#86efac", NIST: "#7dd3fc", "ISO 27001": "#5eead4",
};

export function getTechnologyColor(name: string): string {
    return colors[name] ?? "#cbd5e1";
}
