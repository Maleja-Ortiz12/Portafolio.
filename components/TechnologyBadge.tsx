import type { CSSProperties } from "react";
import { getTechnologyColor } from "@/data/technology-colors";

export function TechnologyBadge({ name }: { name: string }) {
    const style = { "--technology-color": getTechnologyColor(name) } as CSSProperties;
    return (
        <span className="technology-badge" style={style}>
            <span aria-hidden="true" className="technology-badge-dot" />
            {name}
        </span>
    );
}
