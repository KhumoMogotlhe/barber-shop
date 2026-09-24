import styled from 'styled-components';
import { media } from '../../styles/media';

export const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};

  ${media.tablet} {
    padding: 0 ${({ theme }) => theme.space.lg};
  }
`;