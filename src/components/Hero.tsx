import { FaFilePdf } from 'react-icons/fa';
import Phrases from '@/components/Phrases';
import ParticleText from '@/components/ParticleText';

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative flex min-h-svh flex-col items-center justify-center gap-8'
    >
      <h1 className='sr-only'>Jacob Maynard's Portfolio Website</h1>
      <div className='-mb-4 w-full max-w-2xl text-center sm:mb-0 xl:max-w-4xl animate-fade-in [animation-delay:200ms]'>
        <ParticleText text='Jacob Maynard' colorScheme='dark' />
      </div>
      <div className='animate-fade-up [animation-delay:1200ms] opacity-0 [animation-fill-mode:forwards]'>
        <Phrases startDelay={1200} />
      </div>
      <div className='animate-fade-up [animation-delay:1600ms] opacity-0 [animation-fill-mode:forwards]'>
        <a
          href='/Jacob Maynard Resume 2026.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='group border-muted text-primary bg-background hover:bg-secondary hover:border-primary flex items-center gap-2 rounded-lg border p-3 px-5 transition-colors'
        >
          <FaFilePdf size={18} />
          <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
            View Resume
          </span>
        </a>
      </div>
    </section>
  );
}
