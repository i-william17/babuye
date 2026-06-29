import ImageFrame from './ImageFrame';

export default function ProjectCard({ project }) {
  return (
    <article className="group">
      <ImageFrame className="aspect-[4/3] bg-cloud" src={project.image} alt={`${project.title} visual`} />
      <div className="mt-6 flex items-center justify-between gap-4 border-b border-ink/10 pb-4">
        <span className="text-xs uppercase tracking-[0.18em] text-steel">{project.category}</span>
        <span className="text-xs uppercase tracking-[0.18em] text-steel">{project.location}</span>
      </div>
      <h3 className="mt-5 font-display text-3xl text-ink">{project.title}</h3>
      <p className="mt-4 text-base leading-8 text-graphite">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.metrics.map((metric) => (
          <span className="border-b border-ink/20 py-1 text-xs uppercase tracking-[0.16em] text-steel" key={metric}>
            {metric}
          </span>
        ))}
      </div>
    </article>
  );
}
