import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-20%,rgba(59,130,246,0.25),transparent)]"></div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 pb-24 pt-32 md:pt-40 lg:gap-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-blue-400/30 bg-slate-900/40 px-3 py-1 text-xs text-blue-200/90 backdrop-blur">
          Interview-ready portfolio template
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Show your project superpowers
          <span className="block bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">with a modern, playful vibe</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl text-blue-100/90"
        >
          A sleek one-page site to present your best work, highlight your skills, and make a memorable impression during interviews.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center rounded-xl bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/20"
          >
            Explore Projects
            <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition hover:bg-sky-400"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
