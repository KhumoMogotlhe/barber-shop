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

export const LogoMark = ({ size = 34 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
    <circle cx="32" cy="32" r="30" fill="#1C1C1C" stroke="#E4572E" strokeWidth="2.5" />
    <g transform="rotate(-38 32 32)">
      <rect x="28" y="11" width="6" height="42" rx="2" fill="#E4572E" />
      <g stroke="#E4572E" strokeWidth="2" strokeLinecap="round">
        {[14, 18.5, 23, 27.5, 32, 36.5, 41, 45.5, 50].map((y) => (
          <line key={y} x1="34" y1={y} x2="39" y2={y} />
        ))}
      </g>
    </g>
    <g transform="translate(9 7) scale(.72)">
      <g fill="none" stroke="#F5F5F2" strokeWidth="4" strokeLinecap="round">
        <line x1="25" y1="43" x2="44" y2="10" />
        <line x1="39" y1="43" x2="20" y2="10" />
        <circle cx="22" cy="49" r="6" />
        <circle cx="42" cy="49" r="6" />
      </g>
      <circle cx="32" cy="31" r="2.4" fill="#1C1C1C" />
    </g>
  </svg>
);

export const Logo = () => (
  <Wrap to="/" aria-label="Sharp/Line Barber Studio, home">
    <LogoMark />
    <Word>
      SHARP<span>/</span>FADE
    </Word>
  </Wrap>
);