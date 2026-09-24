import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../styles/media';

const Wrap = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: inherit;
`;


const Word = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.02em;

  ${media.tablet} {
    font-size: 1.25rem;
  }

  span {
    color: ${({ theme }) => theme.colors.accent};
    margin: 0 0.05em;
  }
`;

export const LogoMark = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
    <rect width="32" height="32" rx="7" fill="#E4572E" />
    <path d="M11.5 24.5 L20.5 7.5" stroke="#111111" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const Logo = () => (
  <Wrap to="/" aria-label="Sharp/Line Barber Studio, home">
    <LogoMark />
    <Word>
      SHARP<span>/</span>LINE
    </Word>
  </Wrap>
);