import styled, { css } from 'styled-components';
import { media } from '../../styles/media';

/* Layout */

export const Layout = styled.div<{ $single?: boolean }>`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: minmax(0, 1fr);
  scroll-margin-top: calc(${({ theme }) => theme.layout.headerHeight} + 1rem);

  ${media.desktop} {
    grid-template-columns: ${({ $single }) => ($single ? 'minmax(0, 760px)' : 'minmax(0, 1fr) 320px')};
    justify-content: center;
    align-items: start;
    gap: ${({ theme }) => theme.space.xl};
  }
`;

export const Panel = styled.div`
  min-width: 0;
  padding: ${({ theme }) => theme.space.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.surface};

  ${media.tablet} {
    padding: ${({ theme }) => theme.space.xl};
  }
`;

/* Progress */

export const Progress = styled.ol`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

export const ProgressItem = styled.li<{ $state: 'done' | 'current' | 'todo' }>`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme, $state }) => ($state === 'todo' ? theme.colors.textMuted : theme.colors.text)};

  &::before {
    content: '';
    height: 4px;
    border-radius: ${({ theme }) => theme.radii.pill};
    background: ${({ theme, $state }) => ($state === 'todo' ? theme.colors.border : theme.colors.accent)};
  }
`;

export const ProgressButton = styled.button`
  text-align: left;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
`;

/* Step headings */

export const StepTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.space.xs};
`;

export const StepIntro = styled.p`
  margin-bottom: ${({ theme }) => theme.space.lg};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Category = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.space.xl};
  }
`;

export const CategoryTitle = styled.h3`
  margin-bottom: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

/* Option cards (services, barbers) */

export const OptionGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const OptionCard = styled.button<{ $selected: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
  text-align: left;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1.5px solid ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.bg : theme.colors.surface)};
  box-shadow: ${({ theme, $selected }) => ($selected ? `inset 0 0 0 1px ${theme.colors.accent}` : 'none')};
  transition: border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.textMuted)};
  }
`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: ${({ theme }) => theme.space.md};
`;

export const CardName = styled.span`
  font-weight: 700;
`;

export const Price = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;

export const CardDesc = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const CardMeta = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const BarberRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
`;

export const Avatar = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

/* Date and time */

export const DateStrip = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.space.sm};
  margin-bottom: ${({ theme }) => theme.space.lg};
  scroll-snap-type: x mandatory;
`;

export const DateButton = styled.button<{ $selected: boolean }>`
  flex: 0 0 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 0.6rem 0;
  scroll-snap-align: start;
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1.5px solid ${({ theme, $selected }) => ($selected ? theme.colors.primary : theme.colors.border)};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.primary : theme.colors.surface)};
  color: ${({ theme, $selected }) => ($selected ? theme.colors.textOnPrimary : theme.colors.text)};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  strong {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.2;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const SelectedDate = styled.p`
  margin-bottom: ${({ theme }) => theme.space.md};
  font-weight: 700;
`;

export const SlotGroup = styled.div`
  & + & {
    margin-top: ${({ theme }) => theme.space.lg};
  }
`;

export const SlotGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
  gap: ${({ theme }) => theme.space.sm};
`;

export const SlotButton = styled.button<{ $selected: boolean }>`
  min-height: 44px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1.5px solid ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.border)};
  background: ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.surface)};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ $selected }) => ($selected ? 700 : 500)};

  &:hover {
    border-color: ${({ theme, $selected }) => ($selected ? theme.colors.accent : theme.colors.text)};
  }
`;

export const Empty = styled.p`
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
`;

export const ErrorText = styled.p`
  margin-top: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.error};
`;

/* Step actions */

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.xl};
`;

export const BackButton = styled.button`
  min-height: 44px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: underline;
  }
`;

/* Form */

export const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.lg};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Field = styled.div<{ $full?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  ${media.tablet} {
    grid-column: ${({ $full }) => ($full ? '1 / -1' : 'auto')};
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
`;

const inputStyles = css<{ $invalid?: boolean }>`
  width: 100%;
  min-height: 48px;
  padding: 0.75rem 1rem;
  font-size: 16px; /* 16px stops iOS zooming in on focus */
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1.5px solid ${({ theme, $invalid }) => ($invalid ? theme.colors.error : theme.colors.border)};
  background: ${({ theme }) => theme.colors.surface};

  &:focus {
    border-color: ${({ theme, $invalid }) => ($invalid ? theme.colors.error : theme.colors.primary)};
  }
`;

export const Input = styled.input<{ $invalid?: boolean }>`
  ${inputStyles}
`;

export const TextArea = styled.textarea<{ $invalid?: boolean }>`
  ${inputStyles}
  min-height: 96px;
  resize: vertical;
`;

export const FieldError = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.error};
`;

export const CheckboxRow = styled.label`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};

  input {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    accent-color: ${({ theme }) => theme.colors.accent};
  }

  a {
    color: ${({ theme }) => theme.colors.accentText};
    font-weight: 500;
    text-decoration: underline;
  }
`;

/* Summary sidebar */

export const Summary = styled.aside`
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.lg};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  ${media.desktop} {
    position: sticky;
    top: calc(${({ theme }) => theme.layout.headerHeight} + 1.5rem);
  }
`;

export const SummaryTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const SummaryList = styled.dl`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  div {
    display: flex;
    justify-content: space-between;
    gap: ${({ theme }) => theme.space.md};
  }

  dt {
    color: ${({ theme }) => theme.colors.textMutedOnPrimary};
  }

  dd {
    text-align: right;
    font-weight: 500;
  }
`;

export const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.space.md};
  padding-top: ${({ theme }) => theme.space.md};
  border-top: 1px solid ${({ theme }) => theme.colors.borderOnPrimary};
  font-size: ${({ theme }) => theme.fontSizes.lg};

  strong {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const SummaryNote = styled.p`
  margin-top: ${({ theme }) => theme.space.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMutedOnPrimary};
`;

/* Confirmation */

export const SuccessIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  margin-bottom: ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radii.pill};
  background: ${({ theme }) => theme.colors.success};
  color: #ffffff;
  font-size: 1.5rem;
`;

export const DetailList = styled(SummaryList)`
  padding: ${({ theme }) => theme.space.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.bg};

  dt {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export const CalendarTitle = styled.h3`
  margin: ${({ theme }) => `${theme.space.xl} 0 ${theme.space.md}`};
`;

export const CalendarButtons = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space.sm};
  grid-template-columns: minmax(0, 1fr);

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const calendarButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 52px;
  padding: 0 1.25rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textOnPrimary};
  }
`;

export const CalendarLink = styled.a`
  ${calendarButtonStyles}
`;

export const CalendarButton = styled.button`
  ${calendarButtonStyles}
`;

export const Hint = styled.p`
  margin-top: ${({ theme }) => theme.space.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textMuted};
`;