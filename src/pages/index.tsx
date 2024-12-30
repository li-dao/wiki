import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
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
        <p className='hero__subtitle'>
          <Translate>Everything you should know about the $Li and Snowflake Foundation</Translate>
        </p>
        <ButtonGroup>
          <Link className='button button--primary button--lg' to='/risk-disclaimer'>
            <Translate>Start Reading</Translate>
          </Link>
        </ButtonGroup>

        <FeatureCards>
          <div className='feature-card'>
            <div className='icon'>🔗</div>
            <div className='content'>
              <h3>
                <Translate>Novice of Blockchain</Translate>
              </h3>
              <p>
                <Translate>Learn about blockchain technology and how it empowers freedom of information</Translate>
              </p>
            </div>
          </div>
          <div className='feature-card'>
            <div className='icon'>🗣️</div>
            <div className='content'>
              <h3>
                <Translate>Fight for Free Speech</Translate>
              </h3>
              <p>
                <Translate>Support uncensored news and protect voices in restricted regions</Translate>
              </p>
            </div>
          </div>
          <div className='feature-card'>
            <div className='icon'>🏛️</div>
            <div className='content'>
              <h3>
                <Translate>Community Governance</Translate>
              </h3>
              <p>
                <Translate>Join a decentralized community committed to democratic values</Translate>
              </p>
            </div>
          </div>
        </FeatureCards>

        <SecondaryLinks>
          <Link to='https://github.com/li-dao/wiki/blob/main/CONTRIBUTING.md'>
            <Translate>How to Contribute</Translate>
          </Link>
          <span>•</span>
          <Link to='https://github.com/li-dao/wiki/issues'>
            <Translate>Suggest Changes</Translate>
          </Link>
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
