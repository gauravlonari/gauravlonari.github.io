export type Kind = 'perf' | 'platform' | 'reliability' | 'correctness' | 'backend' | 'quality' | 'dx' | 'role';
export type Entry = {
  date: string;           // display, verified month where known
  kind: Kind;
  title: string;
  metric?: { from: string; to: string; label: string }[];
  note?: string;
  caseStudy?: string;     // slug in src/content/case-studies
};
export const log: Entry[] = [
  { date: 'Aug 2026', kind: 'perf', title: 'Login page rebuilt for slow networks',
    metric: [{ from: '4.5 s', to: '1.5 s', label: 'load' }, { from: '3.3 MB', to: '230 KB', label: 'initial JavaScript' }, { from: '60', to: '90', label: 'Lighthouse' }],
    caseStudy: 'login-performance' },
  { date: 'Aug 2026', kind: 'platform', title: 'Production deploys, and the keys that ran them',
    metric: [{ from: '10 min', to: '< 1 min', label: 'deploy' }],
    note: 'Parallel jobs, partial-clone checkouts, pinned toolchain, Slack release reporting. Long-lived service-account keys replaced with keyless Workload Identity Federation.' },
  { date: 'Aug 2026', kind: 'platform', title: 'A usable link for every pull request',
    metric: [{ from: 'days', to: '< 60 s', label: 'commit to product link' }],
    caseStudy: 'preview-environments' },
  { date: 'Aug 2026', kind: 'reliability', title: 'Observability from zero',
    metric: [{ from: '2 days', to: '< 1 hour', label: 'frontend MTTR' }, { from: '', to: '21', label: 'custom RUM vitals' }],
    caseStudy: 'observability' },
  { date: 'Aug 2026', kind: 'correctness', title: 'Checkout made replay-safe',
    note: 'A race between async benefit writes and confirmation could wipe a member’s benefits. Modelled as guarded state transitions; every step idempotent.',
    caseStudy: 'idempotent-checkout' },
  { date: 'May 2026', kind: 'dx', title: 'Tree-shaking in the shared component library; MCP for the codebase',
    metric: [{ from: '4.6 MB', to: '2.1 MB', label: 'shipped JavaScript, portal' }],
    note: 'Five library PRs every client app now imports from. An internal Model Context Protocol integration streams live browser UX context into AI coding agents; repo agent rules keep AI-assisted changes on team conventions.' },
  { date: 'Jan 2026', kind: 'platform', title: 'Runtimes off end-of-life',
    metric: [{ from: 'Node 14', to: 'Node 18', label: 'HR dashboard' }, { from: 'Node 18', to: 'Node 24', label: 'enrolment portal' }] },
  { date: 'Jul 2025', kind: 'role', title: 'Promoted to Software Development Engineer II', note: 'Intern to SDE-2 in 24 months. Leading 1 SDE and 1 intern; 1,000+ pull requests reviewed across 8 repositories.' },
  { date: '2025', kind: 'perf', title: 'Operations view that renders 20,000 members at once',
    metric: [{ from: '2 GB', to: '40 MB', label: 'heap' }],
    note: 'Table and row virtualization. Usable on low-end operator machines.' },
  { date: 'Jan–Mar 2025', kind: 'backend', title: 'HR registration hardened at ingest',
    metric: [{ from: '', to: '8', label: 'backend PRs' }],
    note: 'Mobile, name and currency sanitisation; cross-policy duplicate-credential detection; coverage and salary backfill; hard delete on mid-term rejection.' },
  { date: 'Jul 2024', kind: 'role', title: 'Software Engineer. Shipped the benefits selection portal',
    metric: [{ from: '', to: '10 days', label: 'first production version' }],
    note: 'Became the foundation of the corporate enrolment platform. Custom IdP SSO and email-OTP login followed.' },
  { date: 'Sep 2023 – Jul 2024', kind: 'quality', title: 'HR dashboard ported from JavaScript to TypeScript',
    metric: [{ from: '', to: '619 / 621', label: 'files in TypeScript' }],
    note: 'Alongside: adoption from 20% to a 100% rollout; bulk policy amendments from 1 to 5 batches a day.' },
  { date: 'Jul 2023', kind: 'role', title: 'Joined Loop Health as a Software Engineer Intern', note: 'Built 10+ components in the shared React library.' },
  { date: 'Apr–Jun 2023', kind: 'role', title: 'Contract at Caliber, Missouri (remote)', note: 'Challenge lifecycle, Firebase Auth SSO, Google Fit integration. React, Material UI, Spring Boot. Async across a 10.5-hour offset.' },
  { date: 'Oct 2022', kind: 'role', title: 'First role: The Innovative Solutions, Pune', note: 'Two government-funded platforms: role-based access, document verification, PayU payments, Express and MongoDB.' },
];
export const kindLabel: Record<Kind, string> = { perf: 'performance', platform: 'platform', reliability: 'reliability', correctness: 'correctness', backend: 'backend', quality: 'quality', dx: 'developer experience', role: 'role' };
