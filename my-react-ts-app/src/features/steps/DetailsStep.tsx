import { Link } from 'react-router-dom';
import type { Customer } from '../../types';
import type { DetailErrors } from '../booking/useBooking';
import { Button } from '../../components/ui/Button';
import * as S from '../booking/Booking.styles';

interface Props {
  customer: Customer;
  errors: DetailErrors;
  agreed: boolean;
  onChange: (field: keyof Customer, value: string) => void;
  onAgree: (value: boolean) => void;
  onBack: () => void;
  onConfirm: () => void;
}

const fields = [
  { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', placeholder: 'Thandi Nkosi' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'thandi@example.com' },
  { name: 'phone', label: 'Mobile number', type: 'tel', autoComplete: 'tel', placeholder: '082 123 4567' },
] as const;

export default function DetailsStep({ customer, errors, agreed, onChange, onAgree, onBack, onConfirm }: Props) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onConfirm();
      }}
    >
      <S.StepTitle>Your details</S.StepTitle>
      <S.StepIntro>So we know who's in the chair, and how to reach you if anything changes.</S.StepIntro>

      <S.FormGrid>
        {fields.map((f) => (
          <S.Field key={f.name}>
            <S.Label htmlFor={`booking-${f.name}`}>{f.label}</S.Label>
            <S.Input
              id={`booking-${f.name}`}
              type={f.type}
              autoComplete={f.autoComplete}
              placeholder={f.placeholder}
              value={customer[f.name]}
              onChange={(e) => onChange(f.name, e.target.value)}
              $invalid={Boolean(errors[f.name])}
              aria-invalid={Boolean(errors[f.name])}
              aria-describedby={errors[f.name] ? `booking-${f.name}-error` : undefined}
            />
            {errors[f.name] && <S.FieldError id={`booking-${f.name}-error`}>{errors[f.name]}</S.FieldError>}
          </S.Field>
        ))}

        <S.Field $full>
          <S.Label htmlFor="booking-notes">Anything we should know? (optional)</S.Label>
          <S.TextArea
            id="booking-notes"
            placeholder="E.g. keep the length on top, sensitive skin"
            value={customer.notes ?? ''}
            onChange={(e) => onChange('notes', e.target.value)}
          />
        </S.Field>

        <S.Field $full>
          <S.CheckboxRow>
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => onAgree(e.target.checked)}
              aria-invalid={Boolean(errors.terms)}
            />
            <span>
              I agree to the{' '}
              <Link to="/terms" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </Link>
              , including the 24-hour cancellation policy.
            </span>
          </S.CheckboxRow>
          {errors.terms && <S.FieldError>{errors.terms}</S.FieldError>}
        </S.Field>
      </S.FormGrid>

      <S.Actions>
        <S.BackButton type="button" onClick={onBack}>
          ← Back
        </S.BackButton>
        <Button type="submit">Confirm booking</Button>
      </S.Actions>
    </form>
  );
}