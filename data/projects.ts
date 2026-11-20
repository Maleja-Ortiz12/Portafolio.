export type ProjectCategory = "all" | "gamedev" | "frontend" | "fullstack" | "backend" | "mobile";

export interface ProjectDetails {
    id: number | string;
    title: string;
    description: string;
    detailedDescription: string;
    tech: string[];
    category?: ProjectCategory;
    image?: string;
    github?: string;
    demo?: string;
}

interface ProjectCopy {
    items: { title: string; description: string; detailedDescription: string }[];
    cvItems: { title: string; description: string; stack: string }[];
}

interface ProjectDefinition {
    id: string;
    source: "existing" | "resume";
    index: number;
    category: Exclude<ProjectCategory, "all">;
    tech?: string[];
    image?: string;
    demo?: string;
}

// Existing demos retain their identities. New CV projects have no invented links or screenshots.
const definitions: ProjectDefinition[] = [
    { id: "dimension-shift", source: "existing", index: 0, category: "gamedev", tech: ["Unity 3D", "C#", "Game Design"], image: "/documents/imagenjuego.JPG", demo: "https://malejaconeja12.itch.io/dimension-shift" },
    { id: "uptownhair", source: "existing", index: 2, category: "fullstack", tech: ["React", "NestJS", "TypeScript", "MySQL"], image: "/documents/fondo pagina inicial.JPG", demo: "https://uptownhair-front-production.up.railway.app/" },
    { id: "bendita-gracia", source: "existing", index: 5, category: "frontend", tech: ["Next.js"], image: "/images/bendita-gracia.webp", demo: "https://bendita-gracia.benditagraciaccesorios1.workers.dev/" },
    { id: "la-lupe", source: "existing", index: 6, category: "frontend", tech: ["Next.js"], image: "/images/la-lupe.webp", demo: "https://lalupe.co/" },
    { id: "treesside-developers", source: "existing", index: 7, category: "frontend", tech: ["Next.js"], image: "/images/treesside-developers.webp", demo: "https://treesside-developers.malejawork12.workers.dev/" },
    { id: "inventory", source: "resume", index: 1, category: "backend" },
    { id: "agriculture-mobile", source: "resume", index: 3, category: "mobile" },
];

export function hasWebsite(project: Pick<ProjectDetails, "demo">): boolean {
    return project.demo === "/" || /^https?:\/\/\S+$/.test(project.demo ?? "");
}

export function getFeaturedProjects(copy: ProjectCopy): ProjectDetails[] {
    return definitions.map(({ source, index, tech, ...definition }) => {
        const content = source === "existing" ? copy.items[index] : copy.cvItems[index];
        return {
            ...definition,
            title: content.title,
            description: content.description,
            detailedDescription: "detailedDescription" in content ? content.detailedDescription : content.description,
            tech: tech ?? ("stack" in content ? content.stack.split(" · ") : []),
        };
    }).filter(hasWebsite);
}

export function filterProjects(projects: ProjectDetails[], category: ProjectCategory): ProjectDetails[] {
    return category === "all" ? projects : projects.filter(project => project.category === category);
}
