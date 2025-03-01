import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      href: 'https://github.com/InfinityBowman',
      icon: <FaGithub size={20} />,
      className: 'hover:text-gray-500',
      label: 'GitHub',
    },
    {
      href: 'https://youtube.com/@infinity7585?si=g1JcDj9i_OyPNp_a',
      icon: <FaYoutube size={24} />,
      className: 'text-red-600 hover:text-red-400',
      label: 'YouTube',
    },
    {
      href: 'https://www.linkedin.com/in/jacob-maynard-283767230/',
      icon: <FaLinkedin size={20} />,
      className: 'hover:text-gray-500',
      label: 'LinkedIn',
    },
  ];

  return (
    <footer className="w-full flex bg-background z-50 items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
      <div className="text-left">
        <p>© {new Date().getFullYear()} Jacob Maynard </p>
      </div>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={link.className}
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
