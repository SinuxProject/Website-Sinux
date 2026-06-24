import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// NOTE: When deploying to GitHub Pages, the site lives at:
//   https://amdevelopercp-dotcom.github.io/Sinux/
// If you ever move it to a custom domain, change `url` and set `baseUrl` to '/'.

const config: Config = {
  title: 'Sinux',
  tagline: 'A minimal 64-bit Unix-like operating system kernel, written from scratch in C and x86_64 Assembly.',
  favicon: 'img/sinux-logo.png',

  future: {
    v4: true,
  },

  // Production URL of your site.
  url: 'https://sinuxproject.github.io',
  // For GitHub Pages deployment, this is the "/<projectName>/" path.
  baseUrl: '/Website-Sinux/',

  // GitHub Pages deployment config.
  organizationName: 'amdevelopercp-dotcom', // GitHub account hosting the site.
  projectName: 'Sinux', // GitHub repo name (the fork).
  trailingSlash: false,

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa'],
    localeConfigs: {
      en: {label: 'English', direction: 'ltr', htmlLang: 'en-US'},
      fa: {label: 'فارسی', direction: 'rtl', htmlLang: 'fa-IR'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://sinuxproject.github.io/Website-Sinux/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Sinux Updates',
          blogDescription: 'Release notes and development updates for the Sinux kernel.',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://sinuxproject.github.io/Website-Sinux/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/sinux-logo.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Sinux',
      logo: {
        alt: 'Sinux Logo',
        src: 'img/sinux-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Updates', position: 'left'},
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/CyberSinook/Sinux',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Architecture', to: '/docs/architecture/overview'},
            {label: 'Building', to: '/docs/building/dependencies'},
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Syscalls', to: '/docs/syscalls/abi'},
            {label: 'Updates', to: '/blog'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/CyberSinook/Sinux'},
            {label: 'Issues', href: 'https://github.com/CyberSinook/Sinux/issues'},
            {label: 'Releases', href: 'https://github.com/CyberSinook/Sinux/releases'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CyberSinook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'c', 'armasm', 'makefile'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
