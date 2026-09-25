import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import BookingWizard from '../features/booking/BookingWizard';

const Intro = styled.section`
  padding: ${({ theme }) => `${theme.space.xxl} 0 ${theme.space.xl}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  p {
    max-width: 520px;
    margin-top: ${({ theme }) => theme.space.md};
    color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  }
`;

const Body = styled.section`
  padding: ${({ theme }) => `${theme.space.xl} 0 ${theme.space.section}`};
`;

export default function Book() {
  return (
    <>
      <Intro>
        <Container>
          <h1>Book your chair</h1>
          <p>Pick a service, choose your barber and grab a time. It takes under a minute, and there's no deposit.</p>
        </Container>
      </Intro>
      <Body>
        <Container>
          <BookingWizard />
        </Container>
      </Body>
    </>
  );
}