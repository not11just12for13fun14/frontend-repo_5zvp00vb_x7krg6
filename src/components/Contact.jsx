import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Demo submit
    await new Promise((r) => setTimeout(r, 700));
    setStatus('Thanks! I will get back to you soon.');
  };

  return (
    <section id="contact" className="relative z-10 border-t border-white/10 bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contact</h2>
        <p className="mb-8 text-white/70">Have a role or project in mind? Let’s talk.</p>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500" />
            <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500" />
          </div>
          <input placeholder="Subject" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500" />
          <textarea required rows="5" placeholder="Message" className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-sky-500" />
          <div className="flex items-center gap-4">
            <button className="rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-400" type="submit">Send message</button>
            <span className="text-sm text-white/70">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
