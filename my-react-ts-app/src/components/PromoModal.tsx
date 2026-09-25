import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Modal from './ui/Modal/Modal';
import { Button } from './ui/Button';

const STORAGE_KEY = 'sharpline:promo-seen';
const HIDDEN_ON = ['/book', '/terms', '/privacy'];
const DELAY_MS = 5000;

export const PROMO_CODE = 'FRESHLINE';

const Band = styled.div`
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.lg} ${theme.space.lg}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.accent};
  }

  strong {
    display: block;
    margin-top: ${({ theme }) => theme.space.xs};
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(2rem, 8vw, 2.75rem);
    font-weight: 400;
    line-height: 1;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.lg};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Code = styled.span`
  padding: 0.1rem 0.5rem;
  border: 1.5px dashed ${({ theme }) => theme.colors.accentText};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentText};
  letter-spacing: 0.05em;
`;

const Dismiss = styled.button`
  align-self: center;
  min-height: 44px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }
`;

const SmallPrint = styled.small`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};

  a {
    text-decoration: underline;
  }
`;

export default function PromoModal() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (HIDDEN_ON.includes(pathname)) return;

    let seen = false;
    try {
      seen = localStorage.getItem(STORAGE_KEY) === '1';
    } catch {
      // Storage blocked: show the offer, just don't remember it
    }
    if (seen) return;

    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const close = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  }, []);

  return (
    <Modal open={open} onClose={close} labelledBy="promo-title" closeOnDark>
      <Band>
        <p>First visit offer</p>
        <strong>Free line-up</strong>
      </Band>
      <Body>
        <h2 id="promo-title">Your first line-up is on us</h2>
        <p>
          Book any haircut online for your first visit and we'll add a crisp line-up, worth R80, at no cost.
          Mention <Code>{PROMO_CODE}</Code> when you arrive.
        </p>
        <Button as={Link} to="/book" onClick={close} $full>
          Book my first cut
        </Button>
        <Dismiss type="button" onClick={close}>
          No thanks
        </Dismiss>
        <SmallPrint>
          New clients only. One per person.{' '}
          <Link to="/terms" onClick={close}>
            Terms apply
          </Link>
          .
        </SmallPrint>
      </Body>
    </Modal>
  );
}