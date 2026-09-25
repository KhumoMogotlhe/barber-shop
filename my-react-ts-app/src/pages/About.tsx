import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import PageHeader from '../components/ui/PageHeader';
import SectionHeader from '../components/ui/SectionHeader';
import BarberCard from '../components/BarberCard';
import CtaBand from '../components/CtaBand';
import { barbers } from '../data/barbers';
import { services } from '../data/services';
import { business } from '../data/business';
import { usePageTitle } from '../hooks/usePageTitle';
import { media } from '../styles/media';

const Story = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.xl};
  grid-template-columns: minmax(0, 1fr);
  align-items: center;

  ${media.desktop} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${({ theme }) => theme.space.xxl};
  }

  img {
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.radii.lg};
  }
`;

const StoryText = styled.div`
  p + p {
    margin-top: ${({ theme }) => theme.space.md};
  }

  p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const Stats = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: repeat(2, minmax(0, 1fr));
  text-align: center;

  ${media.tablet} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  dd {
    font-family: ${({ theme }) => theme.fonts.display};
    font-size: clamp(2.25rem, 6vw, 3.5rem);
    line-height: 1;
    color: ${({ theme }) => theme.colors.accent};
  }

  dt {
    margin-top: ${({ theme }) => theme.space.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  }

  div {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const CrewGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => `${theme.space.xl} ${theme.space.lg}`};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${media.desktop} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default function About() {
  usePageTitle('About us');

  const stats = [
    { value: String(business.founded), label: 'Established' },
    { value: String(barbers.length), label: 'Specialist barbers' },
    { value: String(services.length), label: 'Services on the menu' },
    { value: '7', label: 'Days a week' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Built by a barber who hated waiting"
        intro="Sharp/FADE started with one chair and one rule: if you book a time, you get that time."
      />

      <Section>
        <Container>
          <Story>
            <img
              src="/images/interior.webp"
              alt="Inside the Sharp/FADE studio in Braamfontein"
              width={1600}
              height={1200}
              loading="lazy"
            />
            <StoryText>
              <SectionHeader eyebrow="Our story" title="From one chair to a full crew" />
              <p>
                After ten years cutting in busy walk-in shops, Thabo Mokoena was tired of watching clients
                lose their lunch hour in a queue. In {business.founded} he opened Sharp/FADE in Braamfontein
                with a simple idea: a proper barbershop where the appointment time actually means something.
              </p>
              <p>
                The crew has grown since then, and each barber brings a speciality, from skin fades and razor
                lines to scissor work, beard sculpting and patient kids cuts. What hasn't changed is the
                standard: clean tools, honest prices, and a cut you'll want to show off.
              </p>
            </StoryText>
          </Story>
        </Container>
      </Section>

      <Section $variant="dark">
        <Container>
          <Stats>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </Stats>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeader
            eyebrow="The crew"
            title="Meet your barbers"
            intro="Pick your favourite when you book, or choose any available barber for the most times."
          />
          <CrewGrid>
            {barbers.map((barber) => (
              <BarberCard key={barber.id} barber={barber} showBio />
            ))}
          </CrewGrid>
        </Container>
      </Section>

      <CtaBand title="Ready for your next cut?" />
    </>
  );
}