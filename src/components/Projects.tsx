import { HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from '@tanstack/react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { MY_PROJECTS } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch) return;

      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      slideUpEl.forEach((el) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 95%',
            end: 'top -30%',
            scrub: 0.5,
          },
        });

        tl.from(el, { opacity: 0, y: 60, duration: 1, ease: 'none' });
        tl.to({}, { duration: 4 });
        tl.to(el, { opacity: 0, y: -50, duration: 1, ease: 'none' });
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='projects' ref={containerRef} className='mb-10 lg:min-h-screen'>
      <SectionTitle title='My Projects' />

      <div className='space-y-8'>
        {MY_PROJECTS.map((project, index) => (
          <div
            className='slide-up border-accent bg-background/60 flex flex-col justify-between gap-4 rounded-xl border p-4 backdrop-blur-xs sm:flex-row'
            key={index}
          >
            <div className='sm:text-md text-muted-foreground/95 space-y-4 space-x-2 text-sm'>
              <h3 className='text-1xl text-muted-foreground leading-none sm:text-2xl md:text-3xl'>
                {project.title}
              </h3>
              <hr className='bg-muted relative bottom-1 my-2 h-0.5 w-10 border-0' />
              <p className='mb-6 max-w-[60ch]'>{project.description}</p>
              {project.source && project.refUrl && (
                <a
                  href={project.refUrl}
                  target='_blank'
                  className='border-muted text-primary bg-background hover:bg-secondary focus:border-primary inline-flex items-center gap-2 rounded-lg border p-2'
                >
                  <span>{project.source}</span>
                  <HiOutlineExternalLink size={18} />
                </a>
              )}
              {project.link ?
                <a
                  href={project.link}
                  target='_blank'
                  className='border-muted text-primary bg-background hover:bg-secondary focus:border-primary inline-flex items-center gap-2 rounded-lg border p-2'
                >
                  <span>Website</span>
                  <HiOutlineExternalLink size={18} />
                </a>
              : null}
              {project.readMore && (
                <Link
                  to={project.readMore}
                  viewTransition
                  className='border-muted text-primary bg-background hover:bg-secondary focus:border-primary inline-flex items-center gap-2 rounded-lg border p-2'
                >
                  Read more about {project.title}
                </Link>
              )}
            </div>
            {project.isVideo ?
              <div className='flex flex-1 justify-center'>
                <video
                  className='h-auto max-h-[400px] rounded-lg border border-white/30 bg-black/20 object-contain sm:max-w-sm md:max-w-lg'
                  src={project.media}
                  width={project.mediaWidth}
                  height={project.mediaHeight}
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`Demo video for ${project.title}`}
                ></video>
              </div>
            : <div className='m-auto'>
                <img
                  className='h-auto max-h-[400px] rounded-lg border border-white/30 bg-black/20 object-contain sm:max-w-xs md:max-w-md lg:max-w-lg'
                  src={project.media}
                  width={project.mediaWidth}
                  height={project.mediaHeight}
                  alt={project.title + ' image'}
                  loading='lazy'
                />
              </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}
