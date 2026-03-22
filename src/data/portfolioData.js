export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Brief', href: '#brief' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Labs', href: '#labs' },
  { label: 'Contact', href: '#contact' }
];

export const hero = {
  name: 'Yohannes Dawit',
  headline: 'Full-Stack Developer and Web Security Engineer',
  subHeadline:
    'I build fast, resilient, and recruiter-ready digital products with a focus on clean engineering and practical cybersecurity.',
  location: 'Addis Ababa, Ethiopia',
  status: 'Open to internships, freelance projects, and junior security engineering roles.'
};

export const about = {
  summary:
    'I am an Information Systems student and builder who combines front-end engineering with offensive-security fundamentals. I enjoy transforming rough ideas into secure, polished, and measurable digital experiences.',
  highlights: [
    'Currently pursuing B.Sc. in Information Systems at Haramaya University (2023-2027).',
    'Hands-on with React, JavaScript, Python, C++, and Java.',
    'Cybersecurity practice with Burp Suite, Nmap, Kali Linux, and CTF workflows.',
    'Strong communication and collaboration habits developed through freelance and team projects.'
  ]
};

export const skills = [
  { name: 'React', level: 84, group: 'Engineering' },
  { name: 'JavaScript', level: 82, group: 'Engineering' },
  { name: 'CSS', level: 80, group: 'Engineering' },
  { name: 'Python', level: 64, group: 'Engineering' },
  { name: 'Burp Suite', level: 72, group: 'Security' },
  { name: 'Nmap', level: 74, group: 'Security' },
  { name: 'Kali Linux', level: 76, group: 'Security' },
  { name: 'GitHub Actions', level: 58, group: 'Tooling' },
  { name: 'Figma', level: 68, group: 'Tooling' }
];

export const projects = [
  {
    name: 'HU Campus Navigator',
    subtitle: 'Location Intelligence for New Students',
    image: '/HU GPS.jpg',
    role: 'Frontend Engineer and UX Implementer',
    timeline: '6-week product build',
    context:
      'Freshman students at Haramaya University needed faster wayfinding during their first weeks on campus.',
    challenge:
      'Paper maps and word-of-mouth directions were inconsistent, creating missed classes and navigation stress.',
    approach:
      'Designed a map-driven experience with smart search, landmarks, and mobile-first path hints. Added a concise onboarding flow to reduce first-use friction.',
    techStack: ['React', 'Leaflet', 'REST API', 'CSS Modules'],
    impact: [
      { metric: 'Navigation time', value: '-38%', note: 'Average time to find first destination in user testing.' },
      { metric: 'First-use success', value: '91%', note: 'Students reached target locations without assistance.' },
      { metric: 'Mobile usability', value: '+34%', note: 'Higher satisfaction score after responsive redesign.' }
    ],
    learnings:
      'Prioritizing onboarding clarity and visual hierarchy produced bigger UX gains than adding more map features.',
    githubUrl: 'https://github.com/yohannesdawit21',
    liveUrl: '#'
  },
  {
    name: 'Movie Insight Platform',
    subtitle: 'Recommendation and Rating Experience',
    image: '/moviePic.jpg',
    role: 'Frontend Developer',
    timeline: '4-week iterative release',
    context:
      'Movie fans wanted one clean dashboard to compare ratings and quickly shortlist content for watch nights.',
    challenge:
      'Discovery flow required too many clicks and context switches across different websites and tabs.',
    approach:
      'Built a single-screen discovery journey with API-driven search, ranking cards, and streamlined interaction states optimized for mobile and desktop.',
    techStack: ['React', 'TMDB API', 'JavaScript', 'Responsive UI'],
    impact: [
      { metric: 'Decision speed', value: '-42%', note: 'Fewer clicks from search to watch decision.' },
      { metric: 'Session depth', value: '+27%', note: 'Users explored more titles per session.' },
      { metric: 'Bounce rate', value: '-19%', note: 'Cleaner first screen and improved loading states.' }
    ],
    learnings:
      'Fast filtering and progressive loading mattered more than visual complexity for user retention.',
    githubUrl: 'https://github.com/yohannesdawit21',
    liveUrl: '#'
  }
];

export const labs = [
  {
    command: 'scan --target demo.local --ports top100',
    output: 'Open ports found: 22, 80, 443 | Risk profile: low'
  },
  {
    command: 'audit --headers https://example.app',
    output: 'Missing headers: X-Frame-Options, CSP | Suggested baseline generated.'
  },
  {
    command: 'report --format recruiter-brief',
    output: 'Generated concise security summary with business impact and remediation priorities.'
  }
];

export const contact = {
  email: 'yohannesdawit6777@gmail.com',
  github: 'https://github.com/yohannesdawit21',
  linkedIn: 'https://www.linkedin.com/in/yohannes-dawit-b13599305'
};

export const recruiterBriefs = [
  {
    role: 'Frontend Engineer',
    summary:
      'Yohannes builds fast, accessible React interfaces with clear UX decisions and a strong eye for product polish.',
    strengths: ['Component architecture', 'Performance-first UI', 'Responsive design systems'],
    value:
      'Can ship customer-facing features quickly while maintaining code quality and visual consistency.'
  },
  {
    role: 'Full-Stack Engineer',
    summary:
      'Yohannes combines frontend execution with practical backend integration, delivering complete user journeys.',
    strengths: ['API integration', 'End-to-end product thinking', 'Iterative delivery'],
    value:
      'Bridges product requirements and implementation details, reducing handoff friction across teams.'
  },
  {
    role: 'Security Engineer (Web)',
    summary:
      'Yohannes applies web security fundamentals directly in product development, reducing common app-level risks.',
    strengths: ['Threat-aware UI decisions', 'Burp Suite and Nmap workflow', 'Security communication'],
    value:
      'Improves baseline application security while keeping engineering velocity practical for startups and product teams.'
  }
];
