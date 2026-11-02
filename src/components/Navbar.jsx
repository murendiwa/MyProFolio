import { nav, site } from '../data/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { Container, Shield } from './ui'

const links = [...nav, { id: 'contact', label: 'Contact' }]
const ids = links.map((l) => l.id)

export default function Navbar() {
  const active = useActiveSection(ids)

  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-50 border-b-4 border-marker bg-asphalt text-paper">
      <Container>
        <nav className="flex items-center justify-between gap-3 py-2.5" aria-label="Main">
          <a href="#home" aria-label={`${site.name} — top of page`}>
            <Shield className="text-2xl">{site.logo.replace('.', '')}</Shield>
          </a>
          <ul className="flex items-center gap-0.5 sm:gap-2">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`block px-2 py-1 font-display text-base font-semibold tracking-wider uppercase sm:px-3 sm:text-lg ${
                    active === l.id
                      ? 'text-marker underline decoration-2 underline-offset-8'
                      : 'text-paper/80 hover:text-paper'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
