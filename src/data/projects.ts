export type Project = { name: string; url: string; summary: string; stack: string };
export const projects: Project[] = [
  { name: 'psyMing', url: 'https://psyming.vercel.app',
    summary: 'An offline-first PWA for habits, reminders and milestones, with web push driven by a cron scheduler. Built because every habit app I tried needed a network connection to tell me to drink water.',
    stack: 'React, Redux Toolkit, MUI, localforage; Express and Mongoose on Vercel Functions' },
  { name: 'speaktype', url: 'https://github.com/karansinghgit/speaktype/pull/142',
    summary: 'Fixed the control pill and menu-bar panel so they render over full-screen apps, in a 100% offline open-source voice-dictation app.',
    stack: 'Swift, macOS' },
];
