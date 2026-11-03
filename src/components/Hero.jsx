import profile from '../assets/profile.jpg'
import { site } from '../data/site'
import { useRotate } from '../hooks/useRotate'
import { Container, Shield, Sign } from './ui'

export default function Hero() {
  const [message, index] = useRotate(site.typing)

  return (
    <section id="home" className="pt-10 pb-6 sm:pt-14">
      <Container>
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_340px]">
          <Sign className="p-6 sm:p-10">
            <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs tracking-[0.16em] uppercase">
              <Shield>N1</Shield>
              <span>Limpopo → {site.city.replace(', ZA', '')}</span>
            </div>

            <h1 className="font-display text-[clamp(60px,13vw,156px)] leading-[0.84] font-extrabold tracking-[0.005em] uppercase">
              {site.name}
            </h1>

            <p className="mt-5 mb-8 max-w-xl font-display text-2xl leading-tight font-semibold tracking-wide uppercase sm:text-3xl">
              {site.title}
              <span className="text-marker"> · </span>
              {site.subtitle}
            </p>

            {/* variable message sign, the amber boards above the freeway */}
            <div
              className="mb-8 rounded-md border-2 border-paper/90 bg-asphalt px-4 py-3"
              role="status"
              aria-live="off"
            >
              <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-paper/60 uppercase">
                Message board
              </p>
              <p
                key={index}
                className="min-h-8 font-mono text-lg tracking-[0.12em] text-marker uppercase sm:text-xl"
                style={{ animation: 'vms-in 0.5s ease-out' }}
              >
                {message}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border-2 border-ink bg-marker px-5 py-2.5 font-display text-xl font-bold tracking-wider text-ink uppercase hover:bg-paper"
              >
                View my work <span aria-hidden="true">➜</span>
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-md border-2 border-paper px-5 py-2.5 font-display text-xl font-bold tracking-wider uppercase hover:bg-paper hover:text-sign"
              >
                About me
              </a>
            </div>
          </Sign>

          <figure className="flex flex-col overflow-hidden rounded-xl border-4 border-ink bg-paper">
            <img
              src={profile}
              alt={`Portrait of ${site.name}`}
              className="min-h-80 w-full flex-1 object-cover object-[30%_20%]"
            />
            <figcaption className="grid grid-cols-3 border-t-4 border-ink bg-asphalt text-paper">
              {[
                ['Location', 'Pretoria'],
                ['Status', 'Active'],
                ['Year', '2nd'],
              ].map(([label, value], i) => (
                <div key={label} className={`px-3 py-2 ${i ? 'border-l-2 border-paper/25' : ''}`}>
                  <p className="font-mono text-[10px] tracking-[0.16em] text-paper/60 uppercase">{label}</p>
                  <p
                    className={`font-display text-xl font-bold tracking-wide uppercase ${
                      label === 'Status' ? 'text-marker' : ''
                    }`}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
