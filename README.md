# Yohannes Dawit Portfolio

Personal portfolio website focused on frontend engineering, full-stack development, and web security.

## Features

- Responsive layout for mobile, tablet, and desktop
- Sticky navigation with smooth scrolling
- Hero section with profile summary and clear call-to-actions
- Recruiter brief generator with copy-to-clipboard support
- Skills section with category filters and progress meters
- Project case-study cards with impact metrics
- Interactive labs section styled like a terminal
- Contact section with working message form and social links
- Light and dark theme toggle with persistence

## Tech Stack

- React
- JavaScript (ES6+)
- CSS (custom design system)
- React Testing Library + Jest

## Preview Assets

Main visual assets are located in public/:

- public/MyProfile.JPG
- public/HU GPS.jpg
- public/moviePic.jpg

## Getting Started

```bash
# 1) Install dependencies
npm install

# 2) Start development server
npm start

# 3) Create production build
npm run build

# 4) Run tests
npm test
```

## Project Structure

```text
src/
  components/        # UI sections and reusable pieces
  data/              # Portfolio content data
  hooks/             # Custom hooks (theme and reveal behavior)
  App.js             # Main app composition
  App.css            # Main styling
```

## Deployment Notes

The app builds into build/ and can be deployed to GitHub Pages, Netlify, Vercel, or any static hosting provider.

If you deploy to a subpath (for example GitHub Pages), set the correct homepage field in package.json.
