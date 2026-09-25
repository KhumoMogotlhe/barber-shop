import styled, { css } from 'styled-components';

type Variant = 'light' | 'alt' | 'dark' | 'accent';

export const Section = styled.section<{ $variant?: Variant }>`
  padding: ${({ theme }) => theme.space.section} 0;

  ${({ theme, $variant = 'light' }) => {
    const map = {
      light: [theme.colors.bg, theme.colors.text],
      alt: [theme.colors.surfaceAlt, theme.colors.text],
      dark: [theme.colors.primary, theme.colors.textOnPrimary],
      accent: [theme.colors.accent, theme.colors.primary],
    };
    const [bg, fg] = map[$variant];
    return css`
      background: ${bg};
      color: ${fg};
    `;
  }}
`;