export const brandGuidelines = {
  company: {
    name: 'AIMUB Solutions',
    slogan: 'Automating Success',
    description: 'AI-powered automation solutions for modern businesses'
  },
  logo: {
    minimumSize: {
      digital: {
        width: 32,
        height: 32,
        unit: 'px'
      },
      print: {
        width: 0.5,
        height: 0.5,
        unit: 'inches'
      }
    },
    clearSpace: {
      minimum: '0.5x',
      recommended: '1x',
      description: 'x equals logo height'
    },
    colorVariants: {
      primary: '#3B82F6',
      light: '#FFFFFF',
      dark: '#1E293B'
    },
    usage: {
      do: [
        'Use approved color variations',
        'Maintain minimum clear space',
        'Scale proportionally',
        'Use high contrast backgrounds'
      ],
      dont: [
        'Alter logo proportions',
        'Add effects or shadows',
        'Use unapproved colors',
        'Place on busy backgrounds'
      ]
    }
  },
  colors: {
    primary: {
      main: '#3B82F6',
      light: '#60A5FA',
      dark: '#2563EB'
    },
    secondary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5'
    },
    accent: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669'
    },
    neutral: {
      main: '#1E293B',
      light: '#F8FAFC',
      dark: '#0F172A'
    }
  },
  typography: {
    primary: 'Inter',
    fallback: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    weights: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  spacing: {
    grid: 8,
    baseline: 4
  }
};