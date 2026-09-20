export const profile = {
  name: 'Gaurav Lonari',
  title: 'Full Stack Product Engineer',
  company: 'Loop Health',
  level: 'SDE-2',
  location: 'Pune, India',
  remote: true,
  memberSince: 'Jul 2023',
  memberNumber: 'GL-2023-0724', // decorative; matches join month
  hero: "I build the enrolment system behind 1M+ people's health cover, and the tooling that lets a team ship it in under a minute.",
  email: 'gauravlonariofficial@gmail.com',
} as const;
export type Profile = typeof profile;
