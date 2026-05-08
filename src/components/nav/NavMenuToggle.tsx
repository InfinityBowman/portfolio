import { Link } from '@tanstack/react-router';

interface NavMenuToggleProps {
  onToggle: () => void;
  isOpen: boolean;
}

export default function NavMenuToggle({ onToggle, isOpen }: NavMenuToggleProps) {
  return (
    <div className='fixed top-0 right-0 z-50 flex items-center gap-3 p-6'>
      <Link
        to='/'
        className='rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/20'
      >
        Work With Me
      </Link>
      <button
        onClick={onToggle}
        className='inline-flex items-center justify-center rounded-md'
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        type='button'
      >
        <svg className='h-10 w-10' viewBox='0 0 24 24' aria-hidden='true'>
          <line
            x1='4'
            y1='6'
            x2='20'
            y2='6'
            className={`transition-transform duration-200 ${
              isOpen ? 'translate-x-[0.55rem] translate-y-[-0.02rem] rotate-45 transform' : ''
            }`}
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
          />
          <line
            x1='4'
            y1='12'
            x2='20'
            y2='12'
            className={`transition duration-200 ${isOpen ? 'translate-x-7 opacity-25' : ''}`}
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
          />
          <line
            x1='4'
            y1='18'
            x2='20'
            y2='18'
            className={`transition-transform duration-200 ${
              isOpen ? '-translate-x-[0.51rem] translate-y-[0.51rem] -rotate-45 transform' : ''
            }`}
            stroke='currentColor'
            strokeWidth='1'
            strokeLinecap='round'
          />
        </svg>
      </button>
    </div>
  );
}
