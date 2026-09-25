import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import PageHeader from '../components/ui/PageHeader';
import BookingWizard from '../features/booking/BookingWizard';
import { usePageTitle } from '../hooks/usePageTitle';

const Body = styled.section`
  padding: ${({ theme }) => `${theme.space.xl} 0 ${theme.space.section}`};
`;

export default function Book() {
  usePageTitle('Book an appointment');

  return (
    <>
      <PageHeader
        eyebrow="Online booking"
        title="Book your chair"
        intro="Pick a service, choose your barber and grab a time. It takes under a minute, and there's no deposit."
      />
      <Body>
        <Container>
          <BookingWizard />
        </Container>
      </Body>
    </>
  );
}