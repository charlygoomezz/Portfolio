import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Services from '@/components/Services';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Lenis from 'lenis';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main
      className="flex flex-col container mx-auto max-w-4xl 
    p-10 lg:pr-10 lg:pl-0 lg:max-w-6xl"
    >
      <Hero />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
