export default function Skills() {
  const skills = [
    { group: 'Frontend', items: ['React', 'Vite', 'Tailwind', 'Framer Motion'] },
    { group: 'Backend', items: ['FastAPI', 'Node.js', 'MongoDB'] },
    { group: 'Other', items: ['Git', 'Docker', 'CI/CD'] },
  ];

  return (
    <section id="skills" className="border-t border-white/10 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Skills</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 text-lg font-medium">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
