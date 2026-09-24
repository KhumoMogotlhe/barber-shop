import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop';

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: 0.5rem;
  z-index: 1000;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;

  &:focus {
    left: 0.5rem;
  }
`;

export default function Layout() {
  return (
    <Page>
      <ScrollToTop />
      <SkipLink href="#main">Skip to content</SkipLink>
      <Header />
      <Main id="main">
        <Outlet />
      </Main>
      <Footer />
      {/* PromoModal goes here later */}
    </Page>
  );
}