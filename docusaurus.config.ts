import type { PluginOptions as DocPlugOptions } from '@docusaurus/plugin-content-docs'
import type { PluginOptions as IdealImagePluginOptions } from '@docusaurus/plugin-ideal-image'
import type { PluginOptions as SitemapPluginOptions } from '@docusaurus/plugin-sitemap'
import type { Config } from '@docusaurus/types'
import type { PluginOptions as SearchPluginOptions } from '@easyops-cn/docusaurus-search-local'
import { themes as prismThemes } from 'prism-react-renderer'

const config: Config = {
  title: '$Li Wiki',
  favicon: 'img/icon.jpeg',
  tagline: 'The wiki of $Li and snowflake foundation',

  url: 'https://your-docusaurus-site.example.com', // TODO: need set to real url
  baseUrl: '/', // TODO: need set to real url

  // Help to simplify url
  trailingSlash: false,

  // Github Organization and Repo Name
  organizationName: 'li-dao',
  projectName: 'lidao-wiki',
  deploymentBranch: 'gh-pages',

  // Help search engines to index
  noIndex: false,

  // Lint and broken behavior
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Head tags
  headTags: [], // TODO: need to set in the future

  // static directories
  staticDirectories: ['static'],

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'zh-TW', 'en'],
  },

  markdown: {
    format: 'detect',
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-classic',
    '@docusaurus/theme-mermaid',
    '@docusaurus/theme-live-codeblock',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexBlog: false,
        indexDocs: true,
        indexPages: false,
        docsRouteBasePath: '/',
        language: ['zh', 'en'],
        hashed: 'query',
        docsDir: 'wiki',
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 50,
        searchBarPosition: 'right',
      } satisfies SearchPluginOptions,
    ],
  ],

  themeConfig: {
    // color mode
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // social card
    image: 'img/social-card.jpg',

    // announcementBar
    announcementBar: {
      id: 'work in progress',
      content: 'This wiki is under construction',
      backgroundColor: '#A5DD2DFF',
      textColor: '#0A0B0EFF',
      isCloseable: false,
    },

    // doc (wiki)
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    // Blog, we do not need it for now
    blog: undefined,

    navbar: {
      // title: 'Wiki of $Li',
      title: 'Wiki | $Li | 雪花基金会',
      logo: {
        alt: '$Li: The most dangerous cat',
        src: 'img/icon.jpeg',
      },
      items: [
        {
          label: 'Official Website',
          href: 'https://placeholder.com/official-website', // TODO: need to set to real url
          position: 'left',
        },
        {
          label: 'X',
          href: 'https://x.com/Li_memecoin',
          position: 'left',
        },
        {
          label: 'Github',
          href: 'https://github.com/li-dao',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://placeholder.com/help-translate', // TODO: need to set to real url
              label: 'Help us translate',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: 'light',
      copyright: `Copyright © 2024 - ${new Date().getFullYear()} $Li developer and contributor. Under CC-BY-NC-SA 4.0`,
      // links: [],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'wiki/',
        sidebarPath: 'src/sidebars.ts',
        sidebarCollapsed: false,
        sidebarCollapsible: true,
        include: ['**/*.{md,mdx}'],
        exclude: ['template.md'],
        routeBasePath: '/',
        editUrl: 'https://github.com/li-dao/lidao-wiki',
        editCurrentVersion: false,
        editLocalizedFiles: true,
        showLastUpdateTime: true,
      } satisfies Partial<DocPlugOptions>,
    ],
    [
      '@docusaurus/plugin-debug',
      {
        debug: process.env.NODE_ENV !== 'production',
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'todo', // TODO: should set to real id
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'todo', // TODO: should set to real id
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        name: 'ideal-img/[name].[hash:hex:7].[width].[ext]',
        sizes: [128, 256, 512, 1024, 2048],
        size: 1024,
        min: 128,
        max: 2048,
        steps: 4,
        quality: 80,
        disableInDev: true,
      } satisfies Partial<IdealImagePluginOptions>,
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        filename: 'sitemap.xml',
        ignorePatterns: ['/404'],
        lastmod: 'date',
        changefreq: 'daily',
      } satisfies Partial<SitemapPluginOptions>,
    ],
    [
      '@docusaurus/plugin-vercel-analytics',
      {
        mode: 'auto',
        debug: true,
      },
    ],
  ],
}

// biome-ignore lint/style/noDefaultExport: Required by Docusaurus
export default config
