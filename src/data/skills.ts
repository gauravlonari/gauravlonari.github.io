export type SkillGroup = { name: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { name: 'Core', items: ['TypeScript','JavaScript','React 18','Redux Toolkit','React Query','TanStack Table','React Native','Node.js','Java','SQL'] },
  { name: 'Backend', items: ['Node.js microservices','Express.js','Spring Boot','REST APIs','GraphQL','system design','authentication','Single Sign-On (SSO)','OAuth 2.0','JSON Web Tokens (JWT)','Identity Provider (IdP) integration','PostgreSQL','MongoDB'] },
  { name: 'Cloud', items: ['Google Cloud Platform (GCP)','Cloud Run','API Gateway','Cloud Load Balancing','load balancing','Firebase','Docker'] },
  { name: 'Platform and delivery', items: ['GitHub Actions','CI/CD','pull-request preview environments','Workload Identity Federation (WIF)','Vite','build optimization','web performance','feature flags','Flagsmith','Agile/Scrum'] },
  { name: 'Reliability and security', items: ['Datadog RUM','Datadog dashboards','custom vitals','on-call alerting','Sentry','Core Web Vitals','unit testing','integration testing','Jest','Vitest','Playwright','Content Security Policy (CSP)','SOC 2','penetration testing','VAPT remediation'] },
  { name: 'AI engineering', items: ['prompt engineering','Model Context Protocol (MCP)','LLM coding agents','agent-rule and repository-context authoring','Claude Code','GitHub Copilot','Cursor'] },
];
