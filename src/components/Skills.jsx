import { levelLabel, skillGroups } from '../data/skills'
import { Container, SectionTitle, Sign } from './ui'

const SEGMENTS = 10

function Row({ skill }) {
  const filled = Math.round((skill.level / 100) * SEGMENTS)
  return (
    <li className="border-t border-paper/30 py-3.5 first:border-t-0 first:pt-0 last:pb-0">
      <h4 className="flex items-baseline gap-3 font-display text-2xl leading-tight font-bold tracking-wide uppercase">
        <span aria-hidden="true" className="w-10 shrink-0 text-marker">
          {skill.icon}
        </span>
        {skill.name}
      </h4>
      <p className="mt-0.5 pl-13 text-[15px] leading-snug text-paper/85">{skill.text}</p>
      <div className="mt-2.5 flex items-center gap-3 pl-13">
        <div className="flex flex-1 gap-1" aria-hidden="true">
          {Array.from({ length: SEGMENTS }, (_, i) => (
            <span key={i} className={`h-1.5 flex-1 ${i < filled ? 'bg-marker' : 'bg-paper/25'}`} />
          ))}
        </div>
        <span className="w-17 shrink-0 text-right font-mono text-[10px] tracking-[0.14em] text-paper/75">
          {levelLabel(skill.level)}
        </span>
      </div>
    </li>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="What's under the hood" title="Skills" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Sign key={group.title} className="p-6">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 className="font-display text-3xl leading-none font-extrabold tracking-wide uppercase">
                  {group.title}
                </h3>
                <span className="font-mono text-[10px] tracking-[0.16em] text-paper/70 uppercase">
                  {group.hint}
                </span>
              </div>
              <ul>
                {group.skills.map((s) => (
                  <Row key={s.name} skill={s} />
                ))}
              </ul>
            </Sign>
          ))}
        </div>
      </Container>
    </section>
  )
}
