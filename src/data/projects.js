// Add a new project by adding one object to this array. The grid adapts.
//
//   file      - the little "filename" shown in the card header
//   context   - where the project came from (module, class, personal...)
//   status    - short label such as "In progress" or "Delivered"
//   image     - optional screenshot (import it, or use a /public path).
//               Without one, the card shows a code-style header instead.
//   github    - repo link. The button only appears when you set it.
//   demo      - live link. The button only appears when you set it.

export const projects = [
  {
    title: 'RACEDAY',
    file: 'RaceDay.Api',
    context: 'University POE',
    status: 'In progress',
    description:
      'A race event management platform. Organisers create events, categories and routes; participants enrol and see results. Built as a role-based ASP.NET Core Web API with cookie session auth, then extended with an MVC front end and Azure Blob storage.',
    tags: ['C#', 'ASP.NET Core', 'EF Core', 'SQL Server', 'xUnit', 'GitHub Actions'],
    github: 'https://github.com/murendiwa/POE-Part2',
  },
  {
    title: 'CYBERGUARD',
    file: 'CyberGuard.sln',
    context: 'PROG6221 · POE',
    status: 'Delivered',
    description:
      'A cybersecurity awareness chatbot for Windows. Includes a task assistant backed by MySQL, a 15-question quiz, a simple NLP engine that understands plain-English questions, and a timestamped activity log.',
    tags: ['C#', 'WPF', '.NET', 'MySQL'],
  },
  {
    title: 'ACCESS DESK',
    file: 'AccessDesk.Api',
    context: 'Class exercise',
    status: 'Delivered',
    description:
      'An authentication system for participants and organisers, with an Admin check that confirms whether the system recognises a given person. Layered Web API with models, controllers and services.',
    tags: ['C#', 'ASP.NET Web API', 'Authentication'],
  },
  {
    title: 'FINTRACK',
    file: 'fintrack.concept',
    context: 'HCI · POE Part 1',
    status: 'Concept',
    description:
      'A personal finance web app concept, taken from user research and usability principles through to a full design report. Focused on making budgeting feel simple instead of stressful.',
    tags: ['HCI', 'UX Research', 'Web App'],
  },
]
