import { Link } from 'react-router-dom';
import { FaCalendarCheck, FaCheck, FaClock, FaScissors, FaStar } from 'react-icons/fa6';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import ServiceCard from '../components/ServiceCard';
import BarberCard from '../components/BarberCard';
import { featuredServices } from '../data/services';
import { barbers } from '../data/barbers';
import { business, fullAddress } from '../data/business';
import { getHoursForDay } from '../data/hours';
import { formatTime, nowInShop, parseDateKey } from '../lib/dates';
import { usePageTitle } from '../hooks/usePageTitle';
import * as S from './Home.styles';

const reasons = [
  {
    icon: FaCalendarCheck,
    title: 'Book in under a minute',
    text: 'Pick your barber and time online. No calls, no queue, no deposit.',
  },
  {
    icon: FaScissors,
    title: 'Specialists, not generalists',
    text: 'Fades, scissor work, beards and designs, each with a barber who lives for it.',
  },
  {
    icon: FaClock,
    title: 'Open seven days',
    text: 'Till 8pm on weekdays, so a fresh cut never has to wait for the weekend.',
  },
];

const testimonials = [
  {
    quote: "Best skin fade I've had in Joburg. Booked on my lunch break, sat down on time, out in 40 minutes.",
    name: 'Kagiso M.',
    service: 'Skin fade',
  },
  {
    quote: "Liam's hot towel shave is the real deal. Proper old-school service in a modern space.",
    name: 'Daniel R.',
    service: 'Hot towel shave',
  },
  {
    quote: 'Ayesha is so patient with my son. He actually asks to go to the barber now.',
    name: 'Nomsa D.',
    service: 'Kids cut',
  },
];

export default function Home() {
  usePageTitle();

  const today = getHoursForDay(parseDateKey(nowInShop().dateKey).getDay());
  const todayText =
    today?.open && today.close
      ? `Open today ${formatTime(today.open)} – ${formatTime(today.close)}`
      : 'Closed today';

  return (
    <>
      {/* Hero */}
      <S.Hero>
        <Container>
          <S.HeroContent>
            <S.Eyebrow>
              {business.address.suburb}, {business.address.city}
            </S.Eyebrow>
            <S.HeroTitle>
              Fresh fades. <span>Zero wait.</span>
            </S.HeroTitle>
            <S.HeroText>
              Sharp fades, clean lines and proper beard work from barbers who take their time, so you don't
              have to wait for yours.
            </S.HeroText>
            <S.HeroActions>
              <Button as={Link} to="/book">
                Book a cut
              </Button>
              <Button as={Link} to="/services" $variant="outline">
                View services
              </Button>
            </S.HeroActions>
            <S.HeroPoints>
              <li><FaCheck aria-hidden="true" /> Open 7 days</li>
              <li><FaCheck aria-hidden="true" /> No deposit</li>
              <li><FaCheck aria-hidden="true" /> From R80</li>
            </S.HeroPoints>
          </S.HeroContent>
        </Container>
      </S.Hero>

      {/* Popular services */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="Popular services"
            title="What we do best"
            intro="Our most-booked cuts and combos. Pick one and you're two taps from a time slot."
          />
          <S.CardGrid>
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </S.CardGrid>
          <S.SectionFooter>
            <S.TextLink to="/services">View all services and prices</S.TextLink>
          </S.SectionFooter>
        </Container>
      </Section>

      {/* Why Sharp/Line */}
      <Section $variant="dark">
        <Container>
          <SectionHeader
            eyebrow="Why Sharp/FADE"
            title="A barber visit, minus the waiting"
            dark
          />
          <S.WhyGrid>
            {reasons.map(({ icon: Icon, title, text }) => (
              <S.WhyItem key={title}>
                <S.IconBadge>
                  <Icon aria-hidden="true" />
                </S.IconBadge>
                <h3>{title}</h3>
                <p>{text}</p>
              </S.WhyItem>
            ))}
          </S.WhyGrid>
        </Container>
      </Section>

      {/* Meet the crew */}
      <Section>
        <Container>
          <SectionHeader
            eyebrow="The crew"
            title="Meet your barbers"
            intro="Four barbers, four specialities. Choose your favourite when you book, or let us match you."
          />
          <S.CrewGrid>
            {barbers.map((barber) => (
              <BarberCard key={barber.id} barber={barber} />
            ))}
          </S.CrewGrid>
          <S.SectionFooter>
            <S.TextLink to="/about">Read our story</S.TextLink>
          </S.SectionFooter>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section $variant="alt">
        <Container>
          <SectionHeader eyebrow="Reviews" title="Don't take our word for it" center />
          <S.QuoteGrid>
            {testimonials.map((t) => (
              <S.QuoteCard key={t.name}>
                <S.Stars aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <FaStar key={i} aria-hidden="true" />
                  ))}
                </S.Stars>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  {t.service}
                </figcaption>
              </S.QuoteCard>
            ))}
          </S.QuoteGrid>
        </Container>
      </Section>

      {/* Final booking band */}
      <Section $variant="accent">
        <Container>
          <S.CtaInner>
            <div>
              <h2>Your next cut is a minute away</h2>
              <p>
                {fullAddress} · {todayText}
              </p>
            </div>
            <Button as={Link} to="/book" $variant="dark">
              Book now
            </Button>
          </S.CtaInner>
        </Container>
      </Section>
    </>
  );
}