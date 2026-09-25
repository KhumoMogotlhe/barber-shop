import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaClock, FaEnvelope, FaLocationDot, FaPhone, FaPlus } from 'react-icons/fa6';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { business, fullAddress, mapsUrl } from '../data/business';
import { hours } from '../data/hours';
import { formatTime, nowInShop, parseDateKey } from '../lib/dates';
import { usePageTitle } from '../hooks/usePageTitle';
import { media } from '../styles/media';

const faqs = [
  {
    q: 'Do you take walk-ins?',
    a: "Yes, when a chair is free. Booking online is the only way to guarantee your time, and it takes under a minute.",
  },
  {
    q: 'How do I pay?',
    a: 'Card or cash in store after your cut. There is no deposit to book.',
  },
  {
    q: 'Can I cancel or reschedule?',
    a: `Yes. Call ${business.phone} or email ${business.email} at least 24 hours before your appointment and there's no charge.`,
  },
  {
    q: 'Where do I park?',
    a: 'Metered street parking is available on Juta Street, and there is a secure parkade a short walk away.',
  },
  {
    q: "Do you cut kids' hair?",
    a: 'Absolutely. Kids pricing applies to under 12s, and we ask that an adult stays for the appointment.',
  },
];

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: minmax(0, 1fr);

  ${media.desktop} {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    align-items: start;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const Card = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};

  h2 {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: ${({ theme }) => theme.space.md};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;

    svg {
      color: ${({ theme }) => theme.colors.accentText};
    }
  }
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    font-weight: 500;
    overflow-wrap: anywhere;

    &:hover {
      color: ${({ theme }) => theme.colors.accentText};
      text-decoration: underline;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const HoursList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const HoursRow = styled.li<{ $today: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding: 0.45rem 0.75rem;
  margin: 0 -0.75rem;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $today }) => ($today ? theme.colors.surfaceAlt : 'transparent')};
  font-weight: ${({ $today }) => ($today ? 700 : 400)};

  small {
    margin-left: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.accentText};
  }
`;

const MapFrame = styled.div`
  overflow: hidden;
  min-height: 360px;
  height: 100%;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surfaceAlt};

  iframe {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 360px;
    border: 0;
  }

  ${media.desktop} {
    min-height: 560px;
  }
`;

const BookCard = styled(Card)`
  background: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  p {
    margin-bottom: ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  }

  h2 svg {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Faq = styled.div`
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};

  details {
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.md};
    background: ${({ theme }) => theme.colors.surface};
  }

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.space.md};
    padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
    font-weight: 700;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    svg {
      flex-shrink: 0;
      color: ${({ theme }) => theme.colors.accentText};
      transition: transform ${({ theme }) => theme.transitions.fast};
    }
  }

  details[open] summary svg {
    transform: rotate(45deg);
  }

  details p {
    padding: ${({ theme }) => `0 ${theme.space.lg} ${theme.space.lg}`};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export default function Contact() {
  usePageTitle('Contact us');
  const todayIndex = parseDateKey(nowInShop().dateKey).getDay();
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Come see us"
        intro="In the heart of Braamfontein, a few minutes' walk from Wits and the Nelson Mandela Bridge."
      />

      <Section>
        <Container>
          <Layout>
            <Cards>
              <Card>
                <h2>
                  <FaLocationDot aria-hidden="true" /> Visit
                </h2>
                <LinkList>
                  <li>
                    <span>{fullAddress}</span>
                  </li>
                  <li>
                    <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                      Get directions →
                    </a>
                  </li>
                </LinkList>
              </Card>

              <Card>
                <h2>
                  <FaPhone aria-hidden="true" /> Call or email
                </h2>
                <LinkList>
                  <li>
                    <a href={business.phoneHref}>{business.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${business.email}`}>
                      <FaEnvelope aria-hidden="true" style={{ marginRight: 6, verticalAlign: -2 }} />
                      {business.email}
                    </a>
                  </li>
                </LinkList>
              </Card>

              <Card>
                <h2>
                  <FaClock aria-hidden="true" /> Opening hours
                </h2>
                <HoursList>
                  {hours.map((h) => {
                    const isToday = h.day === todayIndex;
                    return (
                      <HoursRow key={h.day} $today={isToday}>
                        <span>
                          {h.label}
                          {isToday && <small>Today</small>}
                        </span>
                        <span>
                          {h.open && h.close ? `${formatTime(h.open)} – ${formatTime(h.close)}` : 'Closed'}
                        </span>
                      </HoursRow>
                    );
                  })}
                </HoursList>
              </Card>

              <BookCard>
                <h2>Skip the queue</h2>
                <p>The fastest way to get a chair is to book online. It takes under a minute.</p>
                <Button as={Link} to="/book" $full>
                  Book an appointment
                </Button>
              </BookCard>
            </Cards>

            <MapFrame>
              <iframe
                src={mapEmbed}
                title={`Map showing ${business.name} at ${fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </MapFrame>
          </Layout>
        </Container>
      </Section>

      <Section $variant="alt">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Questions we get a lot" center />
          <Faq>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  {f.q}
                  <FaPlus aria-hidden="true" />
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </Faq>
        </Container>
      </Section>
    </>
  );
}