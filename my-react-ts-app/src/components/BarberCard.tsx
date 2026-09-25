import { useState } from 'react';
import styled from 'styled-components';
import type { Barber } from '../types';
import { getInitials } from '../lib/text';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const Photo = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1);
    transition: filter ${({ theme }) => theme.transitions.base},
      transform ${({ theme }) => theme.transitions.base};
  }

  ${Card}:hover & img {
    filter: grayscale(0);
    transform: scale(1.03);
  }
`;

const Fallback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Role = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: ${({ theme }) => theme.space.sm};

  li {
    padding: 0.25rem 0.6rem;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme }) => theme.colors.surfaceAlt};
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 500;
  }
`;

interface Props {
  barber: Barber;
  showBio?: boolean;
}

export default function BarberCard({ barber, showBio = false }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <Card>
      <Photo>
        {failed ? (
          <Fallback aria-hidden="true">{getInitials(barber.name)}</Fallback>
        ) : (
          <img
            src={barber.photo}
            alt={`${barber.name}, ${barber.role}`}
            width={800}
            height={800}
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </Photo>
      <div>
        <Name>{barber.name}</Name>
        <Role>{barber.role}</Role>
        {showBio && <Role style={{ marginTop: '0.5rem' }}>{barber.bio}</Role>}
        <Tags>
          {barber.specialties.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </Tags>
      </div>
    </Card>
  );
}