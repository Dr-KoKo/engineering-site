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
        '/blog/plc/': [
          {
            text: 'PLC 및 MC Protocol',
            items: [
              { text: '시리즈 소개', link: '/blog/plc/' },
              { text: '1장: PLC 및 MC Protocol 기초', link: '/blog/plc/ch01' },
            ],
          },
        ],
        '/blog/event-driven-microservices/': [
          {
            text: 'Building Event-Driven Microservices',
            items: [
              { text: '시리즈 소개', link: '/blog/event-driven-microservices/' },
              { text: '1장: 이벤트 기반 마이크로서비스란?', link: '/blog/event-driven-microservices/ch01' },
              { text: '2장: 이벤트와 이벤트 스트림의 기초', link: '/blog/event-driven-microservices/ch02' },
            ],
          },
        ],
        '/blog/': [
          {
            text: 'Blog',
            items: [
              { text: 'Overview', link: '/blog/' },
            ],
          },
          {
            text: '시리즈',
            collapsed: false,
            items: [
              { text: 'Building Event-Driven Microservices', link: '/blog/event-driven-microservices/' },
              { text: 'PLC 및 MC Protocol', link: '/blog/plc/' },
            ],
          },
        ],
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
              {
                text: 'DJ_CAMTIC ERP 안정화',
                collapsed: true,
                items: [
                  { text: '프로젝트 개요', link: '/archive/case-studies/dj-camtic/' },
                  { text: 'SQL 최적화', link: '/archive/case-studies/dj-camtic/sql-optimization' },
                  { text: '데이터 정합성 개선', link: '/archive/case-studies/dj-camtic/data-integrity' },
                  { text: '로깅/모니터링 체계', link: '/archive/case-studies/dj-camtic/logging-monitoring' },
                  { text: 'CI/CD 파이프라인', link: '/archive/case-studies/dj-camtic/cicd-pipeline' },
                  { text: '코드 구조·테스트·문서화', link: '/archive/case-studies/dj-camtic/code-quality' },
                  { text: 'Streamlit 로그 대시보드', link: '/archive/case-studies/dj-camtic/log-dashboard' },
                ],
              },
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
