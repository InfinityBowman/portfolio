import SOCIAL_LINKS from '@/lib/socials';

export default function Footer() {
  return (
    <footer className='bg-background border-accent relative z-10 mx-auto flex w-full items-center justify-center gap-8 border-t py-3 text-center text-xs'>
      <div className='text-left'>
        <p>&copy; {new Date().getFullYear()} Jacob Maynard</p>
      </div>
      <div className='flex justify-center gap-4'>
        {SOCIAL_LINKS.map(link => (
          <a
            key={link.href}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            className={link.className}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
