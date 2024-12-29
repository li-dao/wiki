import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

// Enhanced animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`

const rotate = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.1); }
  100% { transform: rotate(360deg) scale(1); }
`

const moveBackground = keyframes`
  0% {
    background-position: 0% 50%;
    background-size: 100% 100%;
  }
  50% {
    background-position: 100% 50%;
    background-size: 120% 120%;
  }
  100% {
    background-position: 0% 50%;
    background-size: 100% 100%;
  }
`

const float = keyframes`
  0% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-10px) translateX(5px); }
  50% { transform: translateY(0px) translateX(10px); }
  75% { transform: translateY(10px) translateX(5px); }
  100% { transform: translateY(0px) translateX(0px); }
`

const glowPulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(var(--ifm-color-primary-rgb), 0.2); }
  50% { box-shadow: 0 0 20px rgba(var(--ifm-color-primary-rgb), 0.4); }
  100% { box-shadow: 0 0 10px rgba(var(--ifm-color-primary-rgb), 0.2); }
`

export const HeroBanner = styled.header(({ theme }) => ({
  padding: `${theme.spacing.medium} 0`,
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  background: 'var(--ifm-background-color)',
  color: 'var(--ifm-font-color-base)',
  height: 'calc(100vh - var(--ifm-navbar-height) - var(--docusaurus-announcement-bar-height))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  perspective: '1000px',

  // Enhanced gradient background
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    right: '-50%',
    bottom: '-50%',
    background: `
      linear-gradient(238deg,
        var(--ifm-color-primary-lightest) 0%,
        transparent 70.71%),
      linear-gradient(127deg,
        var(--ifm-color-primary-darkest) 0%,
        transparent 70.71%),
      linear-gradient(336deg,
        var(--ifm-color-primary-lighter) 0%,
        transparent 70.71%)
    `,
    backgroundSize: '200% 200%',
    animation: `${moveBackground} 20s ease infinite`,
    opacity: 0.1,
    transform: 'rotate(-12deg)',
  },

  // Enhanced particles
  '.particles': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '150vw',
    height: '150vw',
    transform: 'translate(-50%, -50%) rotateX(45deg)',
    opacity: 0.7,
    zIndex: 1,
    animation: `${float} 10s ease-in-out infinite`,

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: `
        radial-gradient(circle at center,
          var(--ifm-color-primary-light) 0%,
          transparent 70%)
      `,
      animation: `${rotate} 30s linear infinite`,
      opacity: 0.1,
      filter: 'blur(40px)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: `
        radial-gradient(circle at center,
          var(--ifm-color-primary) 0%,
          transparent 60%)
      `,
      animation: `${rotate} 20s linear infinite reverse`,
      opacity: 0.1,
      filter: 'blur(30px)',
    },
  },

  // Enhanced container with better mobile support
  '.container': {
    position: 'relative',
    zIndex: 2,
    backdropFilter: 'blur(10px)',
    padding: '2rem',
    borderRadius: '20px',
    background: 'var(--ifm-background-surface-color)',
    border: '1px solid var(--ifm-color-emphasis-200)',
    width: 'min(95%, 1100px)',
    margin: 'auto',
    animation: `${glowPulse} 4s ease-in-out infinite`,
    transform: 'translateZ(0)',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    maxHeight: '90vh',
    justifyContent: 'center',

    '&:hover': {
      transform: 'translateZ(50px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
  },

  // Enhanced title
  '.hero__title': {
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    marginBottom: '0.75rem',
    animation: `${fadeIn} 1s ease-out`,
    color: 'var(--ifm-color-primary)',
    fontWeight: 'bold',
    letterSpacing: '-0.02em',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
    wordBreak: 'break-word',

    '&::after': {
      content: '""',
      display: 'block',
      width: 'clamp(40px, 8vw, 80px)',
      height: '3px',
      background: 'var(--ifm-color-primary)',
      margin: '0.3rem auto',
      borderRadius: '2px',
      animation: `${glowPulse} 4s ease-in-out infinite`,
    },
  },

  // Enhanced subtitle
  '.hero__subtitle': {
    fontSize: 'clamp(1rem, 3vw, 1.3rem)',
    color: 'var(--ifm-color-emphasis-700)',
    animation: `${fadeIn} 1s ease-out 0.3s backwards`,
    margin: '0 auto',
    lineHeight: 1.4,
    maxWidth: '80%',
    fontWeight: '300',
    padding: '0 1rem',
  },

  // Enhanced mobile styles
  '@media screen and (max-width: ${theme.breakpoints.mobile})': {
    height: 'calc(100vh - var(--ifm-navbar-height) - var(--docusaurus-announcement-bar-height))',
    padding: 0,

    '.particles': {
      width: '200vw',
      height: '200vw',
      opacity: 0.5,
    },

    '.container': {
      height: '100%',
      margin: 0,
      borderRadius: 0,
      width: '100%',
      padding: '1rem',
    },
  },

  // Tablet adjustments
  '@media screen and (min-width: 769px) and (max-width: 996px)': {
    '.container': {
      padding: '2rem',
      width: '85%',
    },
  },

  // Large screens
  '@media screen and (min-width: 1400px)': {
    '.container': {
      maxWidth: '1000px',
      padding: '2rem',
    },
  },
}))

export const ButtonGroup = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: `${theme.spacing.small} 0`,
  animation: `${fadeIn} 1s ease-out 0.6s backwards`,

  '.button': {
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '12px 36px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '10px',
    position: 'relative',
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
      transform: 'translateX(-100%)',
      transition: 'transform 0.6s',
    },

    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',

      '&::before': {
        transform: 'translateX(100%)',
      },
    },

    '&:active': {
      transform: 'translateY(-2px)',
    },
  },

  '@media screen and (max-width: 480px)': {
    '.button': {
      width: '80%',
      padding: '14px 32px',
    },
  },

  '@media screen and (max-width: 768px)': {
    '.button': {
      width: '100%',
      maxWidth: '300px',
      padding: '14px 32px',
    },
  },
}))

export const FeatureCards = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1.5rem',
  padding: `${theme.spacing.medium} 0`,
  animation: `${fadeIn} 1s ease-out 0.9s backwards`,

  '.feature-card': {
    background: 'var(--ifm-background-surface-color)',
    borderRadius: '15px',
    padding: '1.5rem',
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out',
    border: '1px solid var(--ifm-color-emphasis-200)',
    animation: `${glowPulse} 4s ease-in-out infinite`,
    animationDelay: 'calc(var(--delay, 0) * 1s)',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },

    '.icon': {
      fontSize: '2.25rem',
      marginBottom: '0.75rem',
    },

    h3: {
      color: 'var(--ifm-color-primary)',
      fontSize: '1.1rem',
      marginBottom: '0.75rem',
    },

    p: {
      color: 'var(--ifm-color-emphasis-700)',
      fontSize: '0.9rem',
      lineHeight: 1.4,
      margin: 0,
    },
  },

  '@media screen and (max-width: 996px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
  },

  '@media screen and (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '1rem',
    padding: `${theme.spacing.small} 0`,

    '.feature-card': {
      padding: '1.5rem',
      minHeight: 'auto',
      flexDirection: 'row',
      textAlign: 'left',
      alignItems: 'center',
      gap: '1rem',

      '.icon': {
        fontSize: '2rem',
        marginBottom: 0,
      },

      '.content': {
        flex: 1,
      },

      h3: {
        marginBottom: '0.4rem',
      },

      p: {
        fontSize: '0.85rem',
      },
    },
  },
}))

export const SecondaryLinks = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '0.75rem',
  fontSize: '0.75rem',
  color: 'var(--ifm-color-emphasis-600)',
  animation: `${fadeIn} 1s ease-out 1.2s backwards`,

  a: {
    color: 'var(--ifm-color-emphasis-700)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',

    '&:hover': {
      color: 'var(--ifm-color-primary)',
      textDecoration: 'underline',
    },
  },

  span: {
    color: 'var(--ifm-color-emphasis-500)',
  },

  '@media screen and (max-width: 480px)': {
    flexDirection: 'column',
    gap: '0.5rem',

    span: {
      display: 'none',
    },
  },

  '@media screen and (max-width: 768px)': {
    flexDirection: 'row',
    gap: '1rem',
    marginTop: '1rem',
    fontSize: '0.8rem',

    span: {
      display: 'inline',
    },
  },
})
