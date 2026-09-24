import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.bg};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

    h1, h2 {
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 400;
    line-height: 1.05;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  h3, h4 {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 700;
    line-height: 1.25;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }

  img { max-width: 100%; height: auto; display: block; }
  a { color: inherit; text-decoration: none; }
  button, input, select, textarea { font: inherit; color: inherit; }
  button { cursor: pointer; background: none; border: none; }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;