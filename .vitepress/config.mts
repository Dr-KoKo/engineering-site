import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'DH Engineering',
    description: 'Engineering documentation archive — architecture decisions, backend systems, infrastructure, and real-world case studies.',
    base: '/engineering-site/',

    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Archive', link: '/archive/' },
        { text: 'Blog', link: '/blog/' },
        { text: 'About', link: '/about' },
      ],

      sidebar: {
        '/archive/': [
          {
            text: 'Archive',
            items: [
              { text: 'Overview', link: '/archive/' },
            ],
          },
          {
            text: 'Architecture',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/archive/architecture/' },
            ],
          },
          {
            text: 'Backend',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/archive/backend/' },
            ],
          },
          {
            text: 'Infrastructure',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/archive/infra/' },
            ],
          },
          {
            text: 'Case Studies',
            collapsed: false,
            items: [
              { text: 'Overview', link: '/archive/case-studies/' },
            ],
          },
        ],
      },

      socialLinks: [
        { icon: 'github', link: 'https://github.com/Dr-KoKo' },
      ],
    },

    mermaid: {},
  })
)
