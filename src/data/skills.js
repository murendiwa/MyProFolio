// Three cards, four skills each. `level` is 0–100 and drives the bar and the label
// (Learning / Growing / Solid / Strong). Be honest with it: the bars are a
// conversation starter, not a score.

export const skillGroups = [
  {
    title: 'Programming',
    hint: 'Languages',
    skills: [
      { icon: '</>', name: 'HTML', level: 85, text: 'Semantic, accessible page structure.' },
      { icon: 'CSS', name: 'CSS', level: 75, text: 'Responsive layouts with Flexbox and Grid.' },
      { icon: 'JS', name: 'JavaScript', level: 40, text: 'DOM and interactivity. Still levelling up.' },
      { icon: 'C#', name: 'C# / .NET', level: 60, text: 'Console, WPF, Web APIs and MVC.' },
    ],
  },
  {
    title: 'Build & Data',
    hint: 'Tools',
    skills: [
      { icon: 'SQL', name: 'SQL & Databases', level: 70, text: 'Relational design, ERDs and queries.' },
      { icon: '⚛', name: 'React & Tailwind', level: 30, text: 'Learning by building this portfolio.' },
      { icon: 'API', name: 'API Design & Testing', level: 60, text: 'REST, role-based access, Swagger, xUnit.' },
      { icon: 'GIT', name: 'Git & CI', level: 55, text: 'Small commits and GitHub Actions builds.' },
    ],
  },
  {
    title: 'What I bring',
    hint: 'Ways of working',
    skills: [
      { icon: 'SYS', name: 'Systems Analysis', level: 80, text: 'Requirements turned into models and designs.' },
      { icon: 'SEC', name: 'Info Security', level: 50, text: 'Auth, hashed passwords, thinking like an attacker.' },
      { icon: 'UX', name: 'HCI & UX', level: 55, text: 'Usability and designing for real people.' },
      { icon: 'PM', name: 'IT Project Mgmt', level: 50, text: 'Scoping, planning and delivering in phases.' },
    ],
  },
]

export function levelLabel(level) {
  if (level >= 75) return 'STRONG'
  if (level >= 50) return 'SOLID'
  if (level >= 35) return 'GROWING'
  return 'LEARNING'
}
