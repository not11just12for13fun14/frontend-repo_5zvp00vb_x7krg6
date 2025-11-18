import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-3 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-500 text-sm font-bold">PB</span>
            <span className="text-sm font-semibold tracking-wide">Portfolio</span>
          </a>

          <button className="md:hidden rounded-lg p-2 text-white/80 hover:bg-white/10" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          </div>
        </div>

        {open && (
          <div className="mt-2 flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900/80 p-3 md:hidden">
            <a href="#projects" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">Projects</a>
            <a href="#skills" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">Skills</a>
            <a href="#about" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">About</a>
            <a href="#contact" className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/10">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}
