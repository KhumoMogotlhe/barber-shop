import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type Variant = 'primary' | 'outline' | 'dark';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
    &:hover { background: ${({ theme }) => theme.colors.accentHover}; }
  `,
  outline: css`
    border: 1.5px solid currentColor;
    &:hover { background: rgba(127, 127, 127, 0.15); }
  `,
  dark: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
    &:hover { background: ${({ theme }) => theme.colors.borderOnPrimary}; }
  `,
};

export const Button = styled.button<{ $variant?: Variant; $full?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-height: 48px;
  padding: 0.85rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 700;
  white-space: nowrap;
  transition: background ${({ theme }) => theme.transitions.fast};
  width: ${({ $full }) => ($full ? '100%' : 'auto')};

  ${({ $variant = 'primary' }) => variants[$variant]}

  ${media.tablet} {
    width: auto;
  }
`;