import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../../../styles/media';

export const FooterWrap = styled.footer`
  padding-top: ${({ theme }) => theme.space.xxl};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
`;

export const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
  grid-template-columns: 1fr;

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: 1.4fr 1fr 1.1fr 1.1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.md};
  max-width: 340px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
`;

export const ColTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.12em;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.accent};
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const linkStyles = css`
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  overflow-wrap: anywhere;
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }
`;

export const FooterLink = styled(Link)`
  ${linkStyles}
`;

export const ExternalLink = styled.a`
  ${linkStyles}
`;

export const HoursList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  max-width: 260px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};

  li {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.space.md};
  }

  li span:last-child {
    color: ${({ theme }) => theme.colors.textOnPrimary};
    white-space: nowrap;
  }
`;

export const Socials = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.colors.borderOnPrimary};
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 1.1rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.xxl};
  padding: ${({ theme }) => theme.space.lg} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.borderOnPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.lg};
`;