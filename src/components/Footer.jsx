import { site } from '../data/site'
import { Container } from './ui'

export default function Footer() {
  return (
    <footer className="mt-8 bg-asphalt py-8 text-paper">
      <div className="lane-dashes-h mb-6 h-0.5" aria-hidden="true" />
      <Container className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.16em] uppercase">
        <span>© 2026 {site.name}. All rights reserved.</span>
        <span className="text-marker">Welcome to {site.city.replace(', ZA', '')}</span>
      </Container>
    </footer>
  )
}
