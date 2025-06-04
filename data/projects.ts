export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'CTF Toolkit',
    description:
      'Collection of utilities and scripts to speed up Capture The Flag challenges.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/alexcyber/ctf-toolkit',
    slug: 'ctf-toolkit',
  },
  {
    title: 'Secure Chat',
    description:
      'End-to-end encrypted chat application built with Node.js and React.',
    logo: '/logos/react_icon.svg',
    link: 'https://github.com/alexcyber/secure-chat',
    slug: 'secure-chat',
  },
  {
    title: 'Vuln Notes',
    description:
      'A collection of write-ups documenting vulnerability research and CTF solutions.',
    logo: '/logos/markdown_icon.svg',
    link: 'https://github.com/alexcyber/vuln-notes',
    slug: 'vuln-notes',
  },
  {
    title: 'Recon Scanner',
    description:
      'Automated reconnaissance tool for discovering subdomains and open ports.',
    logo: '/logos/json_icon.svg',
    link: 'https://github.com/alexcyber/recon-scanner',
    slug: 'recon-scanner',
  },
];
