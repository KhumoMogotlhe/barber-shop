import type { ReactNode } from 'react';
import styled from 'styled-components';
import { Container } from './ui/Container';
import { Section } from './ui/Section';
import PageHeader from './ui/PageHeader';

interface Props {
  title: string;
  intro: string;
  updated: string;
  children: ReactNode;
}

const Prose = styled.article`
  max-width: 760px;

  h2 {
    margin: ${({ theme }) => `${theme.space.xl} 0 ${theme.space.sm}`};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0;
    line-height: 1.3;
  }

  p,
  li {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  p + p {
    margin-top: ${({ theme }) => theme.space.sm};
  }

  ul {
    margin: ${({ theme }) => theme.space.sm} 0;
    padding-left: 1.25rem;
    list-style: disc;
  }

  li + li {
    margin-top: 0.35rem;
  }

  a {
    color: ${({ theme }) => theme.colors.accentText};
    font-weight: 500;
    text-decoration: underline;
  }

  strong {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Updated = styled.p`
  padding-bottom: ${({ theme }) => theme.space.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export default function LegalPage({ title, intro, updated, children }: Props) {
  return (
    <>
      <PageHeader eyebrow="Legal" title={title} intro={intro} />
      <Section>
        <Container>
          <Prose>
            <Updated>Last updated: {updated}</Updated>
            {children}
          </Prose>
        </Container>
      </Section>
    </>
  );
}