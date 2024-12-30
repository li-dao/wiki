import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  wiki: [
    {
      type: 'doc',
      id: 'risk-disclaimer',
      label: 'Risk Disclaimer',
    },
    {
      type: 'category',
      label: '🔗 1. Introduction',
      items: ['introduction/index', 'introduction/mission-statement', 'introduction/about-founders'],
    },
    {
      type: 'category',
      label: '🔗 2. Free Speech',
      items: [
        'free-speech/background',
        'free-speech/spotlight-cases',
        'free-speech/challenges',
        'free-speech/decentralization',
      ],
    },
    {
      type: 'category',
      label: '🚀 3. Getting Started',
      items: [
        'getting-started/why-li',
        'getting-started/how-to-acquire',
        'getting-started/join-community',
        'getting-started/staying-safe',
      ],
    },
    {
      type: 'category',
      label: '🔰 4. Blockchain Basics',
      items: [
        {
          type: 'category',
          label: '💡 4.1. Understanding Blockchain',
          items: ['blockchain/basic/understanding/key-terms', 'blockchain/basic/understanding/consensus'],
        },
        {
          type: 'category',
          label: '🪙 4.2. Memecoins',
          items: ['blockchain/basic/memecoins/what-is-memecoin', 'blockchain/basic/memecoins/community-culture'],
        },
        {
          type: 'category',
          label: '⚡ 4.3. Solana',
          items: ['blockchain/basic/solana/why-solana', 'blockchain/basic/solana/solana-setup'],
        },
      ],
    },
    {
      type: 'category',
      label: '🔰 5. Advanced Blockchain',
      items: [
        {
          type: 'category',
          label: '🔄 5.1. Advanced Concepts',
          items: [
            'blockchain/advanced/advanced-concept/proof-of-history',
            'blockchain/advanced/advanced-concept/smart-contracts',
            'blockchain/advanced/advanced-concept/bridging',
            'blockchain/advanced/advanced-concept/zero-knowledge',
          ],
        },
        {
          type: 'category',
          label: '💎 5.2. Tokenomics',
          items: [
            'blockchain/advanced/tokenomics/distribution',
            'blockchain/advanced/tokenomics/use-cases',
            'blockchain/advanced/tokenomics/security',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '👥 6. Community',
      items: [
        'community/foundation-structure',
        'community/governance',
        'community/transparency',
        'community/proposal-process',
      ],
    },
    {
      type: 'category',
      label: '🛡️ 7. Safety',
      items: ['safety/avoiding-scams', 'safety/using-vpn', 'safety/avoiding-monitoring', 'safety/asset-security'],
    },
    {
      type: 'category',
      label: '❓ 8. Support & FAQ',
      items: ['support/faq', 'support/channels'],
    },
    {
      type: 'category',
      label: '⚖️ 9. Legal & Policy',
      items: ['legal/terms-of-use', 'legal/privacy-policy', 'legal/compliance', 'legal/disclaimers'],
    },
  ],
}

// biome-ignore lint/style/noDefaultExport: Required by Docusaurus
export default sidebars
