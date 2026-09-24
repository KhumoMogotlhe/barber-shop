import styled from 'styled-components';
import { Container } from '../components/ui/Container';

const Section = styled.section`
  padding: ${({ theme }) => theme.space.section} 0;
`;

export default function Services() {
  return (
    <Section>
      <Container>
        <h1>Services</h1>
      </Container>
    </Section>
  );
}