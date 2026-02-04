import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <main
      className="flex flex-col container mx-auto max-w-4xl 
    p-10 lg:pr-10 lg:pl-0 lg:max-w-6xl"
    >
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Contact />
    </main>
  );
}

export default App;
