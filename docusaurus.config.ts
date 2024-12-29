import type { PluginOptions as DocPlugOptions } from '@docusaurus/plugin-content-docs'
import type { PluginOptions as IdealImagePluginOptions } from '@docusaurus/plugin-ideal-image'
import type { PluginOptions as SitemapPluginOptions } from '@docusaurus/plugin-sitemap'
import type { Config } from '@docusaurus/types'
import type { PluginOptions as SearchPluginOptions } from '@easyops-cn/docusaurus-search-local'
import { themes as prismThemes } from 'prism-react-renderer'

const ICON_PATH = 'img/icon.jpeg'

const config: Config = {
  title: '$Li Wiki',
  favicon: ICON_PATH,
  tagline: 'The wiki of $Li and snowflake foundation',

  url: 'https://www.li-dao.wiki',
  baseUrl: '/',

  // Help to simplify url
  trailingSlash: false,

  // Github Organization and Repo Name
  organizationName: 'li-dao',
  projectName: 'wiki',
  deploymentBranch: 'gh-pages',

  // Help search engines to index
  noIndex: false,

  // Lint and broken behavior
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Head tags
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        href: ICON_PATH,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: ICON_PATH,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'The wiki of $Li and snowflake foundation; 雪花基金会和$Li的维基',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'wiki, $Li, snowflake, foundation, block chain, human rights, 维基, 雪花, 基金会, 区块链, 人权',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Developer and Contributor of $Li',
      },
    },
  ],

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
    image: 'img/social-card.jpg', // TODO: need to set to real image

    // announcementBar // TODO: need to be commented when the wiki is official released
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
      title: '$Li | Snowflake Foundation | Wiki',
      logo: {
        alt: '$Li: The most dangerous cat',
        src: ICON_PATH,
      },
      items: [
        {
          label: 'Official Website',
          href: 'https://li-dao.wiki/404', // TODO: need to set to real url
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
              to: 'https://li-dao.wiki/404', // TODO: need to set to real url
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
      style: 'dark',
      copyright: `Copyright © 2024 - ${new Date().getFullYear()} Developer and contributor of $Li all rights reserved. Under CC-BY-NC-SA 4.0`,
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
        sidebarCollapsed: true,
        sidebarCollapsible: true,
        include: ['**/*.{md,mdx}'],
        exclude: ['template.md'],
        routeBasePath: '/',
        editUrl: 'https://github.com/li-dao/wiki',
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
        trackingID: process.env.GOOGLE_ANALYTICS_ID ?? 'None',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: process.env.GOOGLE_TAG_MANAGER_ID ?? 'None',
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
