import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import type React from 'react'
import { ThemeProvider } from '../components/ThemeProvider.tsx'
import { AdditionalLinks, Container, Header, IssueCard, IssueGrid } from '../styles/styled/suggest-changes.tsx'

function SuggestChanges(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  const issueTypes = [
    {
      emoji: '🐛',
      title: <Translate>Report Wrong Information</Translate>,
      description: <Translate>Found incorrect information in the wiki? Help us fix it!</Translate>,
      url: 'https://github.com/li-dao/wiki/issues/new?assignees=really-need-anonymous&labels=bug,wiki&template=bug_report.yml&title=%5BBug%5D%3A+',
    },
    {
      emoji: '📚',
      title: <Translate>Improve Wiki Structure</Translate>,
      description: <Translate>Have suggestions about how to organize the content better?</Translate>,
      url: 'https://github.com/li-dao/wiki/issues/new?assignees=really-need-anonymous&labels=enhancement,wiki,structure&template=feature_request_structure.yml&title=%5BStructure%5D%3A+',
    },
    {
      emoji: '📝',
      title: <Translate>Request New Content</Translate>,
      description: <Translate>Want to see new topics covered in the wiki?</Translate>,
      url: 'https://github.com/li-dao/wiki/issues/new?assignees=really-need-anonymous&labels=enhancement,wiki,content&template=content_request.yml&title=%5BContent%5D%3A+',
    },
    {
      emoji: '❓',
      title: <Translate>Ask a Question</Translate>,
      description: <Translate>Have questions about the wiki? We're here to help!</Translate>,
      url: 'https://github.com/li-dao/wiki/issues/new?assignees=really-need-anonymous&labels=question,wiki&template=question.yml&title=%5BQuestion%5D%3A+',
    },
    {
      emoji: '🎨',
      title: <Translate>Suggest Style Improvements</Translate>,
      description: <Translate>Have ideas about improving the wiki's appearance?</Translate>,
      url: 'https://github.com/li-dao/wiki/issues/new?assignees=really-need-anonymous&labels=style,wiki&template=style_report.yml&title=%5BStyle%5D%3A+',
    },
  ]

  return (
    // @ts-expect-error
    <Layout title={`Suggest Changes - ${siteConfig.title}`}>
      <ThemeProvider>
        <Container>
          <Header>
            <h1>
              <Translate>Suggest Changes</Translate>
            </h1>
            <p>
              <Translate>
                Help us improve the wiki by suggesting changes, reporting issues, or requesting new content.
              </Translate>
            </p>
          </Header>

          <IssueGrid>
            {issueTypes.map((issue, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed order
              <IssueCard href={issue.url} key={index} rel='noopener noreferrer' target='_blank'>
                <h3>
                  <span>{issue.emoji}</span> {issue.title}
                </h3>
                <p>{issue.description}</p>
              </IssueCard>
            ))}
          </IssueGrid>

          <AdditionalLinks>
            <h2>
              <Translate>Other Ways to Contribute</Translate>
            </h2>
            <div className='links'>
              <Link to='/contributing'>
                <Translate>How to Contribute</Translate>
              </Link>
              <Link to='https://github.com/li-dao/wiki/discussions'>
                <Translate>Join Discussions</Translate>
              </Link>
              <Link to='https://t.co/5Z1meSkAlZ'>
                <Translate>Join Telegram</Translate>
              </Link>
            </div>
          </AdditionalLinks>
        </Container>
      </ThemeProvider>
    </Layout>
  )
}

// biome-ignore lint/style/noDefaultExport: required by docusaurus
export default SuggestChanges
