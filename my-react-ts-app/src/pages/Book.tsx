import styled from 'styled-components';
import { Container } from '../components/ui/Container';

const Section = styled.section`
  padding: ${({ theme }) => theme.space.section} 0;
`;

export default function Book() {
  return (
    <Section>
      <Container>
        <h1>Book</h1>
      </Container>
    </Section>
  );
}