import { Link } from 'react-router-dom';
import styled from 'styled-components';
import type { Service } from '../types';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  height: 100%;
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  transition: transform ${({ theme }) => theme.transitions.base},
    box-shadow ${({ theme }) => theme.transitions.base};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.space.md};

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  white-space: nowrap;
`;

const Desc = styled.p`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.space.sm};
  padding-top: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const BookLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentText};

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Card>
      <Top>
        <h3>{service.name}</h3>
        <Price>R{service.price}</Price>
      </Top>
      <Desc>{service.description}</Desc>
      <Footer>
        <span>{service.duration} min</span>
        <BookLink to={`/book?service=${service.id}`} aria-label={`Book ${service.name}`}>
          Book →
        </BookLink>
      </Footer>
    </Card>
  );
}