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
    title: 'Personal Portfolio',
    file: 'PersonalWeb',
    context: 'Personal project',
    status: 'Done and Live',
    description:
      'This is the first repository i created and will have my first mini APP idea or website that i will publish (2026-08-25)',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/murendiwa/myFirst',
  },
  {
    title: 'Professional Portfolio',
    file: 'MyProFolio',
    context: 'Professional project',
    status: 'Pending',
    description:
      'This is my second Website but more Professional.',
    tags: ['JavaScript', 'React', 'TailwindCSS'],
    github: 'https://github.com/murendiwa/MyProFolio',
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
