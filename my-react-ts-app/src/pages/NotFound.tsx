import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.section} 0;
  text-align: center;
`;

export default function NotFound() {
  return (
    <Container>
      <Wrap>
        <h1>Page not found</h1>
        <p>That page doesn't exist, but your next fade can.</p>
        <Button as={Link} to="/">
          Back to home
        </Button>
      </Wrap>
    </Container>
  );
}