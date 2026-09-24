import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { media } from '../../../styles/media';

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.header};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderOnPrimary};
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.sm};
  height: ${({ theme }) => theme.layout.headerHeight};
`;

export const DesktopNav = styled.nav`
  display: none;

  ${media.desktop} {
    display: flex;
    align-items: center;
    gap: 2.25rem;
  }
`;

export const NavItem = styled(NavLink)`
  position: relative;
  padding: 0.25rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  transition: color ${({ theme }) => theme.transitions.fast};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -6px;
    height: 2px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`;

export const BookLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0.45rem 0.9rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 700;
  white-space: nowrap;
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }

  ${media.tablet} {
    padding: 0.6rem 1.35rem;
  }
`;

export const MenuToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.sm};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.primarySoft};
  }

  ${media.desktop} {
    display: none;
  }
`;

/* Mobile menu */

export const MobilePanel = styled.div<{ $open: boolean }>`
  position: fixed;
  top: ${({ theme }) => theme.layout.headerHeight};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({ theme }) => theme.zIndex.mobileMenu};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.md}`};
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.primary};
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: translateY(${({ $open }) => ($open ? '0' : '-8px')});
  transition: opacity ${({ theme }) => theme.transitions.base},
    transform ${({ theme }) => theme.transitions.base},
    visibility ${({ theme }) => theme.transitions.base};

  ${media.desktop} {
    display: none;
  }
`;

export const MobileList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
`;

export const MobileLink = styled(NavLink)`
  display: block;
  padding: 0.4rem 0;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textOnPrimary};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MobileBook = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const MobileMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};

  a:hover {
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }
`;