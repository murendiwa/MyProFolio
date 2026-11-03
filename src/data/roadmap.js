// The education roadmap shown inside "About Me".
// Add, remove or reorder entries freely. Set `current: true` on the one
// that is happening right now (it gets the yellow "You are here" marker).
//
// `obstacle` puts a small hazard on the stretch of road AFTER that step.
// Options: 'pothole' | 'cones' | 'hump' | 'detour' | 'stop'. Remove it for a clear road.
// They are only decoration for now. Swap them for real challenges you want to mention.
//
// Tip: these are drafted from what I know about your journey. Swap in your
// school's name, your matric year, your college and real dates where you like.

export const roadmap = [
  {
    stage: 'ORIGIN',
    title: 'Tshiozwi, Limpopo',
    text: 'Where it started. A rural community that taught me to figure things out and make the most of what is in front of me.',
    obstacle: 'pothole',
  },
  {
    stage: 'HIGH SCHOOL',
    title: 'Manaledzi Secondary School',
    text: 'Matric years of discipline and curiosity. I learned to work hard and started pointing that effort towards a future in tech.',
    obstacle: 'cones',
  },
  {
    stage: 'THE MOVE',
    title: 'Limpopo → Pretoria',
    text: 'Left home for the city to study Software Development. New place, new pace, same drive.',
    obstacle: 'hump',
  },
  {
    Stage: 'COLLEGE',
    title:'Rosebank College',
    text: 'Started my second year of Software Development at Rosebank College. Learning databases, systems design and security by making real things.',
    obstacle: 'hump',
  },

  {
    stage: 'YEAR 1',
    title: 'First lines of code',
    text: 'Programming fundamentals and the web basics. I found out that I understand things best when I build them.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    obstacle: 'detour',
  },
  {
    stage: 'YEAR 2',
    title: 'Going deeper',
    text: 'Databases, systems analysis and design, information security and project management, alongside real builds like the RaceDay API and CyberGuard.',
    tags: ['DATA6211', 'SAND6221', 'ISEC6321', 'IPMA6212'],
    current: true,
    obstacle: 'stop',
  },
  {
    stage: 'NEXT',
    title: 'Internship and beyond',
    text: 'Looking for an internship where I can turn what I have learned in class into real products, and keep growing as a developer.',
  },
]
