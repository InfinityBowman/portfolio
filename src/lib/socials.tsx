import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/InfinityBowman',
    icon: <FaGithub size={20} />,
    className: 'text-primary/70 hover:text-primary transition-colors',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/jacob-maynard-283767230/',
    icon: <FaLinkedin size={20} />,
    className: 'text-primary/70 hover:text-primary transition-colors',
    label: 'LinkedIn',
  },
];
export default SOCIAL_LINKS;
