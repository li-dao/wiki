import styled from '@emotion/styled'

export const Container = styled.div({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '2rem',
  '@media (max-width: 768px)': {
    padding: '1.5rem',
  },
})

export const Header = styled.div({
  textAlign: 'center',
  marginBottom: '4rem',
  h1: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
  },
  p: {
    fontSize: '1.2rem',
    color: 'var(--ifm-color-emphasis-700)',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
})

export const IssueGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '1.5rem',
  marginBottom: '4rem',
  maxWidth: '800px',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    gap: '2rem',
  },
})

export const IssueCard = styled.a({
  display: 'block',
  padding: '2rem',
  borderRadius: '12px',
  background: 'var(--ifm-card-background-color)',
  border: '1px solid var(--ifm-color-emphasis-200)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  color: 'var(--ifm-font-color-base)',

  ':hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: 'var(--ifm-color-primary)',
  },

  h3: {
    margin: '0 0 1rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    fontSize: '1.5rem',
  },

  p: {
    margin: 0,
    color: 'var(--ifm-color-emphasis-700)',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  },
})

export const AdditionalLinks = styled.div({
  textAlign: 'center',
  margin: '6rem auto 0',
  padding: '3rem 2rem',
  background: 'var(--ifm-card-background-color)',
  borderRadius: '12px',
  maxWidth: '800px',

  h2: {
    marginBottom: '2rem',
    fontSize: '2rem',
  },

  '.links': {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
    padding: '0 1rem',
  },

  a: {
    color: 'var(--ifm-color-primary)',
    textDecoration: 'none',
    fontSize: '1.1rem',
    ':hover': {
      textDecoration: 'underline',
    },
  },
})
