import { faCircleDown } from '@fortawesome/free-regular-svg-icons/faCircleDown';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons/faGoogleScholar';
import { faResearchgate } from '@fortawesome/free-brands-svg-icons/faResearchgate';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import CV from '../assets/Joseph Karanja_CV.pdf';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: CV,
    label: 'Download',
    icon: faCircleDown,
  },
  {
    link: 'https://www.linkedin.com/in/joseph-karanja-36805742/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://scholar.google.com/citations?user=KJ9DFtYAAAAJ&hl=en',
    label: 'Google Scholar',
    icon: faGoogleScholar,
  },
  {
    link: 'https://www.researchgate.net/profile/Joseph-Karanja',
    label: 'Research Gate',
    icon: faResearchgate,
  },
  {
    link: 'https://twitter.com/sirjoekaranja',
    label: 'Twitter',
    icon: faXTwitter,
  },
  {
    link: 'mailto:sirjosephkaranja@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
