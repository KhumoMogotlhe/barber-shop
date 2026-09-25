import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../styles/media';

export const Hero = styled.section`
  display: flex;
  align-items: center;
  min-height: clamp(560px, 88vh, 800px);
  padding: ${({ theme }) => theme.space.xxl} 0;
  color: ${({ theme }) => theme.colors.textOnPrimary};
  background-color: ${({ theme }) => theme.colors.primary};
  background-image: linear-gradient(180deg, rgba(17, 17, 17, 0.78), rgba(17, 17, 17, 0.92)),
    url('/images/hero.webp');
  background-size: cover;
  background-position: center;

  ${media.desktop} {
    background-image: linear-gradient(90deg, rgba(17, 17, 17, 0.96) 0%, rgba(17, 17, 17, 0.75) 45%, rgba(17, 17, 17, 0.15) 100%),
      url('/images/hero.webp');
  }
`;

export const HeroContent = styled.div`
  max-width: 640px;
`;

export const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};

  &::before {
    content: '';
    width: 24px;
    height: 2px;
    background: currentColor;
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};

  span {
    display: block;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const HeroText = styled.p`
  max-width: 480px;
  margin-top: ${({ theme }) => theme.space.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
`;

export const HeroActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.xl};
`;

export const HeroPoints = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => `${theme.space.sm} ${theme.space.lg}`};
  margin-top: ${({ theme }) => theme.space.xl};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const CardGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const SectionFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.space.xl};
`;

export const TextLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentText};
  text-decoration: underline;
  text-underline-offset: 4px;
`;

export const WhyGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const WhyItem = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.borderOnPrimary};
  border-radius: ${({ theme }) => theme.radii.lg};

  h3 {
    margin: ${({ theme }) => `${theme.space.md} 0 ${theme.space.sm}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  }
`;

export const IconBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
`;

export const CrewGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => `${theme.space.xl} ${theme.space.md}`};
  grid-template-columns: repeat(2, minmax(0, 1fr));

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const QuoteGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  grid-template-columns: minmax(0, 1fr);

  ${media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const QuoteCard = styled.figure`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};

  blockquote {
    flex: 1;
  }

  figcaption {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }

  figcaption strong {
    display: block;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const CtaInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};

  h2 {
    max-width: 580px;
    font-size: clamp(2rem, 5vw, 3rem);
  }

  p {
    margin-top: ${({ theme }) => theme.space.sm};
    font-weight: 500;
  }

  ${media.desktop} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;