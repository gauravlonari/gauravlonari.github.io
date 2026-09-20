import { useEffect, useState } from 'react';
type Mode = 'light' | 'dark' | 'system';
export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('system');
  useEffect(() => { const s = localStorage.getItem('theme') as Mode | null; if (s) apply(s); }, []);
  function apply(m: Mode) {
    setMode(m);
    if (m === 'system') { document.documentElement.removeAttribute('data-theme'); localStorage.removeItem('theme'); }
    else { document.documentElement.setAttribute('data-theme', m); localStorage.setItem('theme', m); }
  }
  const next: Mode = mode === 'system' ? 'dark' : mode === 'dark' ? 'light' : 'system';
  return (
    <button type="button" onClick={() => apply(next)} aria-label={`Theme: ${mode}. Switch to ${next}.`}
      style={{ background: 'transparent', border: 0, color: 'inherit', font: 'inherit', cursor: 'pointer', textDecoration: 'underline', padding: 0, justifySelf: 'start' }}>
      Theme: {mode}
    </button>
  );
}
