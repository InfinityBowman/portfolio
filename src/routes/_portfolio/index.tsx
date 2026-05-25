import { createFileRoute } from '@tanstack/react-router';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const Route = createFileRoute('/_portfolio/')({
  component: HomePage,
  head: () => ({
    meta: [
      { title: 'Jacob Maynard | Software Engineer' },
      {
        name: 'description',
        content:
          'Portfolio of Jacob Maynard — software engineer specializing in web development and AI solutions.',
      },
      {
        property: 'og:title',
        content: 'Jacob Maynard | Software Engineer',
      },
      {
        property: 'og:description',
        content:
          'Portfolio of Jacob Maynard — software engineer specializing in web development and AI solutions.',
      },
      { property: 'og:url', content: 'https://jacobmaynard.dev' },
    ],
    links: [{ rel: 'canonical', href: 'https://jacobmaynard.dev' }],
  }),
});

function HomePage() {
  return (
    <div className='mx-4 space-y-60 sm:mx-8 sm:mr-16'>
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
