import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import SOCIAL_LINKS from '@/lib/socials';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 100%',
          scrub: 0.5,
        },
      });

      tl.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      id='contact'
      ref={containerRef}
      className='mb-10 flex min-h-screen flex-col justify-center'
    >
      <SectionTitle title='Get In Touch' />

      <div className='slide-up border-accent space-y-6 rounded-xl border p-6 backdrop-blur-md'>
        <p className='text-muted-foreground mx-auto max-w-2xl text-center text-lg sm:text-xl'>
          I'm always open to new opportunities, collaborations, or just a friendly chat about tech.
          Feel free to reach out!
        </p>

        <div className='mx-auto max-w-2xl'>
          <ContactForm />
        </div>

        <div className='slide-up flex flex-wrap justify-center gap-4 pt-2'>
          <a
            href='/Jacob Maynard Resume 2026.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='group border-muted text-primary bg-background hover:bg-secondary hover:border-primary flex items-center gap-2 rounded-lg border p-3 px-5 transition-colors'
          >
            <FaFilePdf size={20} />
            <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
              View Resume
            </span>
          </a>

          {SOCIAL_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group border-muted text-primary bg-background hover:bg-secondary hover:border-primary flex items-center gap-2 rounded-lg border p-3 px-5 transition-colors'
              aria-label={link.label}
            >
              {link.icon}
              <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
