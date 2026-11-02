import { projects } from '../data/projects'
import { site } from '../data/site'
import { Container, Plate, SectionTitle } from './ui'

function ProjectCard({ project }) {
  const { title, context, status, description, tags, github, demo, image } = project

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border-4 border-ink bg-paper">
      <header className="relative bg-sign px-5 pt-4 pb-4 text-paper">
        <div className="flex items-start justify-between gap-3">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">{context}</p>
          <span className="border-2 border-ink bg-marker px-2 py-px font-display text-base leading-tight font-extrabold tracking-wider text-ink uppercase">
            {status}
          </span>
        </div>
        <div className="mt-1 flex items-end justify-between gap-3">
          <h3 className="font-display text-[44px] leading-none font-extrabold tracking-wide uppercase">
            {title}
          </h3>
          <span aria-hidden="true" className="pb-1 font-display text-4xl leading-none">
            ➜
          </span>
        </div>
      </header>

      {image && <img src={image} alt={`${title} screenshot`} className="aspect-video w-full object-cover" />}

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-5 text-[16px] leading-relaxed text-ink-soft">{description}</p>
        <ul className="mb-5 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Plate key={t}>{t}</Plate>
          ))}
        </ul>

        {(demo || github) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-1">
            {demo && (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border-2 border-ink bg-marker px-4 py-1.5 font-display text-lg font-bold tracking-wider uppercase hover:bg-ink hover:text-marker"
              >
                Live demo ➜
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border-2 border-ink px-4 py-1.5 font-display text-lg font-bold tracking-wider uppercase hover:bg-ink hover:text-paper"
              >
                GitHub ➜
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Destinations reached" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

        <p className="mt-10">
          <a
            href={site.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block border-2 border-dashed border-ink px-5 py-2 font-display text-xl font-bold tracking-wider uppercase hover:bg-ink hover:text-paper"
          >
            More destinations on GitHub ➜
          </a>
        </p>
      </Container>
    </section>
  )
}
