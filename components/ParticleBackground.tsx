const particles = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    left: `${(index * 37 + 11) % 100}%`,
    top: `${(index * 23 + 7) % 100}%`,
    animationDelay: `${index * -1.7}s`,
    animationDuration: `${18 + (index % 5) * 3}s`,
}));

const ParticleBackground = () => (
    <div aria-hidden="true" className="portfolio-particles pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {particles.map(({ id, ...style }) => (
            <span key={id} style={style} className="portfolio-particle absolute h-1 w-1 rounded-full bg-indigo-300/20" />
        ))}
    </div>
);

export default ParticleBackground;
