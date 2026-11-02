import { useScrollProgress } from '../hooks/useScrollProgress'

// A strip of road down the left edge. The yellow marker travels with the scroll,
// so reaching the footer means arriving in Pretoria.
export default function RoadRail() {
  const progress = useScrollProgress()

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 bottom-0 left-0 z-40 hidden w-5 bg-asphalt lg:block"
    >
      <div className="lane-dashes-v absolute inset-y-0 left-2.25 w-0.5" />
      <div
        className="absolute left-0.75 size-3.5 rounded-sm border-2 border-ink bg-marker transition-[top] duration-100"
        style={{ top: `calc(${progress} * (100vh - 22px) + 4px)` }}
      />
    </div>
  )
}
