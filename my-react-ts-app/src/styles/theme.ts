export const theme = {
  colors: {
    bg: '#F5F5F2',              // chalk: light content sections
    surface: '#FFFFFF',         // cards, modals, form fields
    surfaceAlt: '#EBEBE6',      // alternating sections, selected states
    primary: '#111111',         // header, hero, footer, headings
    primarySoft: '#1C1C1C',     // cards on dark sections
    accent: '#E4572E',          // buttons, logo slash, highlights on dark
    accentHover: '#F06A42',
    accentText: '#B83D17',      // accent-coloured text on LIGHT backgrounds
    text: '#111111',
    textMuted: '#5E5E5E',
    textOnPrimary: '#F5F5F2',
    textMutedOnPrimary: '#A3A3A3',
    border: '#DADAD4',
    borderOnPrimary: '#2A2A2A',
    error: '#B3261E',
    success: '#2E7D4F',
  },
  fonts: {
    display: "'Archivo Black', 'Arial Black', sans-serif", // h1, h2, logo
    body: "'Space Grotesk', system-ui, -apple-system, sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.25rem',
    xl: 'clamp(1.5rem, 3vw, 2rem)',
    xxl: 'clamp(2.5rem, 7vw, 4.5rem)',
  },
  space: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
    xxl: '4rem',
    section: 'clamp(3.5rem, 9vw, 7rem)',
  },
  radii: { sm: '6px', md: '12px', lg: '20px', pill: '999px' },
  shadows: {
    card: '0 2px 16px rgba(0, 0, 0, 0.06)',
    modal: '0 16px 48px rgba(0, 0, 0, 0.35)',
  },
  layout: { maxWidth: '1200px', headerHeight: '72px' },
  breakpoints: { tablet: 768, desktop: 1024, wide: 1280 },
  transitions: { fast: '150ms ease', base: '250ms ease' },
  zIndex: { header: 100, mobileMenu: 200, modal: 300 },
} as const;