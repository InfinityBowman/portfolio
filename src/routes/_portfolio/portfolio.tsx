import { createFileRoute } from '@tanstack/react-router';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const Route = createFileRoute('/_portfolio/portfolio')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-60 mx-4 sm:mx-8 sm:mr-16">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
