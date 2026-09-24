import styled from 'styled-components';
import { Container } from '../components/ui/Container';

const Section = styled.section`
  padding: ${({ theme }) => theme.space.section} 0;
`;

export default function About() {
  return (
    <Section>
      <Container>
        <h1>About</h1>
      </Container>
    </Section>
  );
}