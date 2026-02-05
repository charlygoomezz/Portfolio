import { lazy, Suspense, useEffect } from 'react';
import Hero from '@/components/Hero';
import { Toaster } from '@/components/ui/sonner';
import Lenis from 'lenis';
import Collabs from './components/Collabs';

// Lazy loads
const Projects = lazy(() => import('@/components/Projects'));
const About = lazy(() => import('@/components/About'));
const Resume = lazy(() => import('@/components/Resume'));
const Contact = lazy(() => import('@/components/Contact'));

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
    <>
      <main
        className="flex flex-col container mx-auto max-w-4xl 
      p-10 lg:pr-10 lg:pl-0 lg:max-w-6xl"
      >
        <Hero />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects />
          <Collabs />
          <About />
          <Resume />
          <Contact />
        </Suspense>
      </main>
      <Toaster />
    </>
  );
}

export default App;
