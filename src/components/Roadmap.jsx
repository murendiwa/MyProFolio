import { roadmap } from '../data/roadmap'
import { Plate } from './ui'

// The roadmap is a winding road. Each step owns one stretch of road that swings
// from one side of the rail to the other, and the stretches join end to end.

const LEFT = 24 // x of the road at left-hand stops, in % of the rail width
const RIGHT = 76 // x of the road at right-hand stops

const jointX = (i) => (i % 2 === 0 ? LEFT : RIGHT)

// Point along a stretch of road. Same cubic curve as the SVG path below, so
// obstacles land exactly on the tarmac. Returns x and y in %.
function pointOnRoad(xa, xb, t) {
  const u = 1 - t
  return {
    x: xa * (u ** 3 + 3 * u * u * t) + xb * (3 * u * t * t + t ** 3),
    y: 150 * u * u * t + 150 * u * t * t + 100 * t ** 3,
  }
}

// Where along each stretch the obstacle sits (0 = start, 1 = end)
const obstacleAt = [0.5, 0.42, 0.58, 0.46, 0.54]

const obstacleIcons = {
  pothole: (
    <>
      <ellipse cx="16" cy="17" rx="13" ry="8" fill="#0a0c0d" stroke="#7a8184" strokeWidth="2" />
      <path d="M5 12l4 3M27 13l-4 3M14 8l1 3" stroke="#7a8184" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  ),
  cones: (
    <>
      <g>
        <path d="M9 5L14.5 24H3.5Z" fill="#ff6a13" />
        <path d="M10.2 11h3.6l1 4h-5.6z" fill="#fff" />
        <rect x="2" y="24" width="14" height="3" rx="1" fill="#14181a" stroke="#7a8184" />
      </g>
      <g transform="translate(14 2)">
        <path d="M9 5L14.5 24H3.5Z" fill="#ff6a13" />
        <path d="M10.2 11h3.6l1 4h-5.6z" fill="#fff" />
        <rect x="2" y="24" width="14" height="3" rx="1" fill="#14181a" stroke="#7a8184" />
      </g>
    </>
  ),
  hump: (
    <>
      <path d="M2 24Q16 4 30 24Z" fill="#ffc20e" stroke="#14181a" strokeWidth="1.5" />
      <path d="M9 23v-5M16 23v-9M23 23v-5" stroke="#14181a" strokeWidth="3" />
    </>
  ),
  detour: (
    <>
      <rect x="6" y="6" width="20" height="20" transform="rotate(45 16 16)" fill="#ffc20e" stroke="#14181a" strokeWidth="2" />
      <path d="M11 21V15h9M17 11l4 4-4 4" fill="none" stroke="#14181a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  stop: (
    <>
      <polygon points="10,3 22,3 29,10 29,22 22,29 10,29 3,22 3,10" fill="#d42a1f" stroke="#fff" strokeWidth="2" />
      <text x="16" y="19" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff" fontFamily="Barlow Condensed, sans-serif">
        STOP
      </text>
    </>
  ),
}

function Obstacle({ kind, x, y }) {
  const icon = obstacleIcons[kind]
  if (!icon) return null
  return (
    <svg
      viewBox="0 0 32 32"
      className="absolute size-7 -translate-x-1/2 -translate-y-1/2 sm:size-9 lg:size-11"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {icon}
    </svg>
  )
}

// Education journey, from where it started to where it's going.
export default function Roadmap() {
  return (
    <div className="mt-24 grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-24 lg:self-start">
        <p className="mb-1 font-mono text-xs tracking-[0.18em] text-ink-soft uppercase">The road so far</p>
        <h3 className="font-display text-[clamp(32px,5vw,48px)] leading-none font-bold uppercase">
          From high school to college
        </h3>
        <p className="mt-4 max-w-[34ch] text-ink-soft">
          Not a straight road. The bends, potholes and roadworks are part of the trip.
        </p>
      </div>

      <ol>
        {roadmap.map((step, i) => {
          const last = i === roadmap.length - 1
          const xa = jointX(i)
          const xb = jointX(i + 1)
          const d = last ? `M${xa} 0L${xa} 100` : `M${xa} 0C${xa} 50 ${xb} 50 ${xb} 100`
          const at = !last && step.obstacle ? pointOnRoad(xa, xb, obstacleAt[i % obstacleAt.length]) : null

          return (
            <li
              key={step.stage}
              className={`grid grid-cols-[72px_1fr] gap-x-4 sm:grid-cols-[110px_1fr] sm:gap-x-6 lg:grid-cols-[170px_1fr] ${
                last ? 'min-h-[150px]' : 'min-h-[300px]'
              }`}
            >
              {/* this step's stretch of road */}
              <div className="relative" aria-hidden="true">
                <svg
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className={`absolute inset-x-0 -top-px h-[calc(100%+2px)] w-full overflow-visible ${
                    last ? '[mask-image:linear-gradient(to_bottom,black_30%,transparent)]' : ''
                  }`}
                >
                  <path d={d} fill="none" vectorEffect="non-scaling-stroke" className="stroke-paper [stroke-width:24px] sm:[stroke-width:32px]" />
                  <path d={d} fill="none" vectorEffect="non-scaling-stroke" className="stroke-asphalt [stroke-width:20px] sm:[stroke-width:28px]" />
                  <path d={d} fill="none" vectorEffect="non-scaling-stroke" className="stroke-marker [stroke-dasharray:10_10] [stroke-width:2px]" />
                </svg>

                {/* stop marker */}
                <span
                  className={`absolute top-[14px] size-5 -translate-x-1/2 rounded-full border-[3px] border-ink ${
                    step.current ? 'bg-marker' : 'bg-paper'
                  }`}
                  style={{ left: `${xa}%` }}
                />

                {at && <Obstacle kind={step.obstacle} x={at.x} y={at.y} />}
              </div>

              <div className="pb-10">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="bg-ink px-2 py-0.5 font-mono text-[11px] tracking-[0.16em] text-paper uppercase">
                    {step.stage}
                  </span>
                  {step.current && (
                    <span className="border-2 border-ink bg-marker px-2 py-px font-display text-base leading-tight font-extrabold tracking-wider text-ink uppercase">
                      You are here
                    </span>
                  )}
                </div>

                <h4 className="font-display text-3xl leading-none font-bold tracking-wide uppercase sm:text-4xl">
                  {step.title}
                </h4>
                <p className="mt-2 max-w-[60ch] text-ink-soft">{step.text}</p>
                {step.tags && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {step.tags.map((t) => (
                      <Plate key={t}>{t}</Plate>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
