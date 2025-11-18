export default function Projects() {
  const projects = [
    {
      title: 'AI Interview Assistant',
      desc: 'Conversational tool that preps candidates with realistic Q&A and feedback.',
      tags: ['React', 'FastAPI', 'OpenAI'],
      link: '#'
    },
    {
      title: 'Realtime Dashboard',
      desc: 'Streaming analytics with live charts and alerting for operations teams.',
      tags: ['React', 'WebSockets', 'Tailwind'],
      link: '#'
    },
    {
      title: 'Portfolio Builder',
      desc: 'One-click templates and components to craft a standout personal site.',
      tags: ['Vite', 'Framer Motion', 'Spline'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative z-10 border-t border-white/10 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 ring-1 ring-inset ring-white/10" />
              <h3 className="mb-2 text-lg font-medium">{p.title}</h3>
              <p className="mb-3 text-sm text-white/70">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
