import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const popIn = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.md};
  background: rgba(0, 0, 0, 0.65);
  animation: ${fadeIn} 200ms ease;
`;

export const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.modal};
  animation: ${popIn} 250ms ease;
`;

export const Close = styled.button<{ $onDark?: boolean }>`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-size: 1.2rem;
  color: ${({ theme, $onDark }) => ($onDark ? theme.colors.textOnPrimary : theme.colors.text)};
  background: ${({ $onDark }) => ($onDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)')};
  transition: background ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ $onDark }) => ($onDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)')};
  }
`;