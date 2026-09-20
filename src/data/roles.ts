export type Role = { title: string; company: string; location: string; start: string; end: string; line: string };
export const roles: Role[] = [
  { title: 'Software Development Engineer II', company: 'Loop Health', location: 'Pune, India (Remote)', start: 'Jul 2025', end: 'Present',
    line: 'Own the corporate benefits enrolment portal end to end: React 18 frontend, 3 Node.js services on Cloud Run behind an API Gateway, the CI/CD and the observability.' },
  { title: 'Software Engineer', company: 'Loop Health', location: 'Pune, India', start: 'Jul 2024', end: 'Jul 2025',
    line: 'Shipped the employee benefits selection portal that became the enrolment platform; virtualised a 20,000-row operations view from 2 GB to 40 MB of heap.' },
  { title: 'Software Engineer Intern', company: 'Loop Health', location: 'Pune, India', start: 'Jul 2023', end: 'Jun 2024',
    line: 'Built 10+ components in the shared React library; revamped the HR dashboard to 100% rollout; ported it from JavaScript to TypeScript.' },
  { title: 'Full Stack Engineer, Contract', company: 'Caliber', location: 'Missouri, USA (Remote)', start: 'Apr 2023', end: 'Jun 2023',
    line: 'Challenge lifecycle, Firebase Auth SSO and Google Fit integration on React, Material UI and Spring Boot, delivered async across a 10.5-hour offset.' },
  { title: 'Full Stack Developer Intern', company: 'The Innovative Solutions', location: 'Pune, India', start: 'Oct 2022', end: 'Apr 2023',
    line: 'Two government-funded platforms: role-based access, document verification workflow, PayU payments, MongoDB and Express APIs.' },
];
