import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { fullAddress } from '../data/business';
import { getHoursForDay } from '../data/hours';
import { formatTime, nowInShop, parseDateKey } from '../lib/dates';
import { media } from '../styles/media';

const Inner = styled.div`
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

export default function CtaBand({ title = 'Your next cut is a minute away' }: { title?: string }) {
  const today = getHoursForDay(parseDateKey(nowInShop().dateKey).getDay());
  const todayText =
    today?.open && today.close
      ? `Open today ${formatTime(today.open)} – ${formatTime(today.close)}`
      : 'Closed today';

  return (
    <Section $variant="accent">
      <Container>
        <Inner>
          <div>
            <h2>{title}</h2>
            <p>
              {fullAddress} · {todayText}
            </p>
          </div>
          <Button as={Link} to="/book" $variant="dark">
            Book now
          </Button>
        </Inner>
      </Container>
    </Section>
  );
}