import { site } from '../data/site'
import Roadmap from './Roadmap'
import { Container, SectionTitle, Sign } from './ui'

const info = [
  ['Name', site.name],
  ['Origin', site.origin],
  ['Based in', site.city],
  ['Studying', 'Software Development'],
  ['Year', '2nd Year'],
  ['Vibes', 'Music · Code · Life'],
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <Container>
        <SectionTitle kicker="Who's driving" title="About me" />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* personal first, professional last */}
          <div className="max-w-[62ch] space-y-5 text-lg text-ink-soft [&_strong]:font-semibold [&_strong]:text-ink">
            <p className="text-2xl leading-snug text-ink sm:text-[28px]">
              I'm <strong>{site.name}</strong>, from the rural roots of <strong>Tshiozwi</strong> in
              Limpopo.
            </p>
            <p>
              Growing up there meant finding my own way, making do with what I had and figuring things
              out as I went. That habit never left me.
            </p>
            <p>
              <strong>Music runs my life.</strong> A-Reece on a late-night listening session hits
              different. Good people around me, good beats in my ears and a mind that always wants to
              build something. That's the personal side.
            </p>
            <p>
              Somewhere between the beats and the books, code became the way I build. Today I'm a{' '}
              <strong>second-year Software Development student</strong> in <strong>Pretoria</strong>,
              learning databases, systems design and security by making real things. I code with
              purpose and move with intention.
            </p>
          </div>

          <Sign tone="service" className="self-start p-7">
            <p className="mb-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase">
              <span aria-hidden="true">ℹ</span> Driver details
            </p>
            <dl>
              {info.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-t border-paper/30 py-2.5"
                >
                  <dt className="font-mono text-[11px] tracking-[0.16em] text-paper/70 uppercase">
                    {label}
                  </dt>
                  <dd className="text-right font-display text-xl font-semibold tracking-wide uppercase">
                    {value}
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 border-t border-paper/30 pt-3">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-paper/70 uppercase">Status</dt>
                <dd className="flex items-center gap-2 rounded-sm bg-marker px-2 py-0.5 font-display text-lg font-bold tracking-wide text-ink uppercase">
                  Open to internships
                </dd>
              </div>
            </dl>
          </Sign>
        </div>

        <Roadmap />
      </Container>
    </section>
  )
}
