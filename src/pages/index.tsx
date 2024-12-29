import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import type React from 'react'
import { ThemeProvider } from '../components/ThemeProvider.tsx'
import { ButtonGroup, FeatureCards, HeroBanner, SecondaryLinks } from '../styles/styled/home.tsx'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <HeroBanner>
      <div className='particles' />
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>Everything you should know about the $Li and Snowflake Foundation</p>
        <ButtonGroup>
          <Link className='button button--primary button--lg' to='/risk-disclaimer'>
            Start Reading
          </Link>
        </ButtonGroup>

        <FeatureCards>
          <div className='feature-card'>
            <div className='icon'>🔗</div>
            <div className='content'>
              <h3>Novice of Blockchain</h3>
              <p>Learn about blockchain technology and how it empowers freedom of information</p>
            </div>
          </div>
          <div className='feature-card'>
            <div className='icon'>🗣️</div>
            <div className='content'>
              <h3>Fight for Free Speech</h3>
              <p>Support uncensored news and protect voices in restricted regions</p>
            </div>
          </div>
          <div className='feature-card'>
            <div className='icon'>🏛️</div>
            <div className='content'>
              <h3>Community Governance</h3>
              <p>Join a decentralized community committed to democratic values</p>
            </div>
          </div>
        </FeatureCards>

        <SecondaryLinks>
          <Link to='https://github.com/li-dao/wiki/blob/main/CONTRIBUTING.md'>How to Contribute</Link>
          <span>•</span>
          <Link to='https://github.com/li-dao/wiki/issues'>Suggest Changes</Link>
        </SecondaryLinks>
      </div>
    </HeroBanner>
  )
}

// biome-ignore lint/style/noDefaultExport: Required by Docusaurus
export default function Home(): React.JSX.Element {
  return (
    // @ts-ignore
    <Layout noFooter={true}>
      <ThemeProvider>
        <HomepageHeader />
      </ThemeProvider>
    </Layout>
  )
}
