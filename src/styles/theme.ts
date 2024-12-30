export const theme = {
  colors: {
    primary: '#A5DD2D',
    secondary: '#0A0B0E',
    gradient: {
      primary: 'linear-gradient(135deg, #A5DD2D 0%, #7AB51D 100%)',
      dark: 'linear-gradient(45deg, #1a1a1a 0%, #4a4a4a 100%)',
      card: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
    },
    background: {
      dark: '#1a1a1a',
      light: '#4a4a4a',
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    text: {
      light: '#ffffff',
      dark: '#000000',
      muted: 'rgba(255, 255, 255, 0.7)',
    },
  },
  breakpoints: {
    mobile: '996px',
  },
  spacing: {
    small: '1rem',
    medium: '2rem',
    large: '4rem',
  },
  animation: {
    transition: '0.3s ease-in-out',
    hover: {
      scale: 'scale(1.05)',
      translateY: 'translateY(-5px)',
    },
  },
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
} as const

export type Theme = typeof theme
