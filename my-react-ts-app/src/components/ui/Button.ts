import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

type Variant = 'primary' | 'outline';

export const Button = styled.button<{ $variant?: Variant; $full?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.85rem 1.5rem;
  min-height: 44px; /* comfortable tap target on mobile */
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 600;
  transition: background ${({ theme }) => theme.transitions.fast};
  width: ${({ $full }) => ($full ? '100%' : 'auto')};

  ${({ theme, $variant = 'primary' }) =>
    $variant === 'primary'
      ? css`
          background: ${theme.colors.accent};
          color: ${theme.colors.primary};
          &:hover { background: ${theme.colors.accentHover}; }
        `
      : css`
          border: 1.5px solid currentColor;
          &:hover { background: rgba(255, 255, 255, 0.08); }
        `}

  ${media.tablet} {
    width: auto;
  }
`;