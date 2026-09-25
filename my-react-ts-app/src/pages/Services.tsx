import styled from 'styled-components';
import { FaCalendarXmark, FaChild, FaClock, FaCreditCard } from 'react-icons/fa6';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import CtaBand from '../components/CtaBand';
import { services, categoryLabels } from '../data/services';
import type { ServiceCategory } from '../types';
import { usePageTitle } from '../hooks/usePageTitle';
import { media } from '../styles/media';

const order: ServiceCategory[] = ['cuts', 'beard', 'packages', 'kids', 'extras'];

const notes = [
  { icon: FaCreditCard, title: 'Pay in store', text: 'Card or cash after your cut. No deposit needed to book.' },
  { icon: FaCalendarXmark, title: 'Free cancellation', text: 'Cancel or reschedule up to 24 hours before at no charge.' },
  { icon: FaClock, title: 'Arrive on time', text: "Arrive 5 minutes early. Over 10 minutes late and we may need to reschedule." },
  { icon: FaChild, title: 'Kids under 12', text: 'Kids pricing applies to under 12s, with an adult present.' },
];

const CategoryNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xxl};

  a {
    padding: 0.55rem 1.1rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.surface};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: 500;
    transition: border-color ${({ theme }) => theme.transitions.fast};

    &:hover {
      border-color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const Category = styled.div`
  scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + 1.5rem);

  & + & {
    margin-top: ${({ theme }) => theme.space.xxl};
  }

  h2 {
    margin-bottom: ${({ theme }) => theme.space.lg};
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.md};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const NotesGrid = styled.div`
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

const Note = styled.div`
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};

  svg {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.accentText};
  }

  h3 {
    margin: ${({ theme }) => `${theme.space.sm} 0 ${theme.space.xs}`};
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export default function Services() {
  usePageTitle('Services and prices');

  return (
    <>
      <PageHeader
        eyebrow="Services and prices"
        title="Cuts, fades and beard work"
        intro="Clear prices, honest timings, no surprises at the till. Tap any service to book it."
      />

      <Section>
        <Container>
          <CategoryNav aria-label="Service categories">
            {order.map((c) => (
              <a key={c} href={`#${c}`}>
                {categoryLabels[c]}
              </a>
            ))}
          </CategoryNav>

          {order.map((c) => (
            <Category key={c} id={c}>
              <h2>{categoryLabels[c]}</h2>
              <Grid>
                {services
                  .filter((s) => s.category === c)
                  .map((s) => (
                    <ServiceCard key={s.id} service={s} />
                  ))}
              </Grid>
            </Category>
          ))}
        </Container>
      </Section>

      <Section $variant="alt">
        <Container>
          <SectionHeader eyebrow="Good to know" title="Before you book" />
          <NotesGrid>
            {notes.map(({ icon: Icon, title, text }) => (
              <Note key={title}>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </Note>
            ))}
          </NotesGrid>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}