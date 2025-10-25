export const theme = {
  colors: {
    bg: {
      primary: '#0a0a0a',
      secondary: '#1a0a1a',
      card: '#2a1a2a',
    },
    accent: {
      pink: '#ff69b4',
      purple: '#9d4edd',
      blue: '#7209b7',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
      muted: '#a0a0a0',
    },
    border: {
      default: '#333333',
      pink: '#ff69b430',
    },
  },
  gradients: {
    primary: 'linear-gradient(135deg, #ff69b4, #9d4edd, #7209b7)',
    bg: 'radial-gradient(ellipse at center, #1a0a1a 0%, #0a0a0a 70%)',
    card: 'linear-gradient(145deg, #2a1a2a, #1a0a1a)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  shadows: {
    sm: '0 1px 2px rgba(255, 105, 180, 0.1)',
    md: '0 4px 6px rgba(255, 105, 180, 0.15)',
    lg: '0 10px 25px rgba(255, 105, 180, 0.2)',
    glow: '0 0 20px rgba(255, 105, 180, 0.3)',
  },
  animation: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },
} as const;

export type Theme = typeof theme;