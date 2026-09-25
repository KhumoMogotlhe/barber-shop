import styled from 'styled-components';
import { Container } from './Container';

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
}

const Wrap = styled.section`
  padding: ${({ theme }) => `${theme.space.xxl} 0 ${theme.space.xl}`};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  h1 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const Eyebrow = styled.p`
  margin-bottom: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

const Intro = styled.p`
  max-width: 560px;
  margin-top: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
`;

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <Wrap>
      <Container>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1>{title}</h1>
        {intro && <Intro>{intro}</Intro>}
      </Container>
    </Wrap>
  );
}