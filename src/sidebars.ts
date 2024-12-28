import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  wiki: [
    {
      type: 'doc',
      id: 'index',
      label: '首页',
    },
    {
      type: 'category',
      label: '雪花基金会',
      collapsible: true,
      collapsed: false,
      items: [
        'about.snowflake.foundation/index',
        'about.snowflake.foundation/key-members',
        'about.snowflake.foundation/structure',
        'about.snowflake.foundation/future',
      ],
    },
    {
      type: 'category',
      label: '虚拟货币 $Li',
      collapsible: true,
      collapsed: false,
      items: ['virtual.coins.li/index', 'virtual.coins.li/tokenomics', 'virtual.coins.li/roadmap'],
    },
    {
      type: 'category',
      label: '区块链基础知识',
      collapsible: true,
      collapsed: false,
      items: ['blockchain/index'],
    },
    {
      type: 'category',
      label: '如何购买 $Li',
      collapsible: true,
      collapsed: false,
      items: ['how-to-buy/guide', 'how-to-buy/exchanges', 'how-to-buy/security'],
    },
    {
      type: 'category',
      label: '新闻自由',
      collapsible: true,
      collapsed: false,
      items: ['freedom-of-news/information', 'freedom-of-news/community'],
    },
    {
      type: 'category',
      label: '风险提示',
      collapsible: true,
      collapsed: false,
      items: ['risk/investment', 'risk/anonymity', 'risk/surveillance'],
    },
  ],
}

// biome-ignore lint/style/noDefaultExport: Required by Docusaurus
export default sidebars
