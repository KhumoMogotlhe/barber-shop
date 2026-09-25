import styled from 'styled-components';

interface Props {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}

const Wrap = styled.div<{ $center?: boolean }>`
  max-width: 640px;
  margin: ${({ theme, $center }) => ($center ? `0 auto ${theme.space.xl}` : `0 0 ${theme.space.xl}`)};
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
`;

const Eyebrow = styled.p<{ $dark?: boolean }>`
  margin-bottom: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme, $dark }) => ($dark ? theme.colors.accent : theme.colors.accentText)};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
`;

const Intro = styled.p<{ $dark?: boolean }>`
  margin-top: ${({ theme }) => theme.space.md};
  color: ${({ theme, $dark }) => ($dark ? theme.colors.textMutedOnPrimary : theme.colors.textMuted)};
`;

export default function SectionHeader({ eyebrow, title, intro, center, dark }: Props) {
  return (
    <Wrap $center={center}>
      {eyebrow && <Eyebrow $dark={dark}>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
      {intro && <Intro $dark={dark}>{intro}</Intro>}
    </Wrap>
  );
}