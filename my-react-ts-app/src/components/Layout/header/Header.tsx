import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../../ui/Container';
import { Logo } from '../../ui/Logo';
import { mainNav } from '../../../data/navigation';
import { theme } from '../../../styles/theme';
import MobileMenu from './MobileMenu';
import * as S from './Header.styles';

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close on route change (covers the browser back button)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close with the Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Close if the window is resized up to desktop
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${theme.breakpoints.desktop}px)`);
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <S.Bar>
      <Container>
        <S.Inner>
          <Logo />

          <S.DesktopNav aria-label="Main">
            {mainNav.map((item) => (
              <S.NavItem key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </S.NavItem>
            ))}
          </S.DesktopNav>

          <S.Actions>
            <S.BookLink to="/book">Book now</S.BookLink>
            <S.MenuToggle
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </S.MenuToggle>
          </S.Actions>
        </S.Inner>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </S.Bar>
  );
}