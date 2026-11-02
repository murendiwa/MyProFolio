# MRY — Portfolio

React + Tailwind CSS (v4) + Vite. Styled after the original HTML demo.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Where to change things

All your content lives in `src/data/`. You should rarely need to touch a component.

| File | What it controls |
| --- | --- |
| `site.js` | Name, logo, typing phrases, email / GitHub / LinkedIn |
| `roadmap.js` | The education roadmap inside About Me |
| `projects.js` | Project cards. Add one object to add a project |
| `skills.js` | Programming skills and core skills, with levels |
| `src/assets/profile.jpg` | Your hero photo (swap the file, keep the name) |
| `src/components/Background.jsx` | The page background, self-contained |

## To do before you publish

- Paste your real LinkedIn URL in `src/data/site.js`.
- Check the GitHub link and add `github` / `demo` links to projects in `projects.js`.
- Replace the roadmap text with your real school, years and college.
- Adjust the skill levels so they reflect how you see yourself.
