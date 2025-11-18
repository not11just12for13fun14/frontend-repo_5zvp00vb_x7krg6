import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Your Name — Built with love and caffeine.
      </footer>
    </div>
  );
}

export default App;
