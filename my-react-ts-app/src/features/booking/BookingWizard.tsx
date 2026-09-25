import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useBooking, STEPS } from './useBooking';
import { formatDateShort, formatTime } from '../../lib/dates';
import ServiceStep from '../steps/ServiceStep';
import BarberStep from '../steps/BarberStep';
import DateTimeStep from '../steps/DateTimeStep';
import DetailsStep from '../steps/DetailsStep';
import ConfirmationStep from '../steps/ConfirmationStep';
import * as S from './Booking.styles';

export default function BookingWizard() {
  const [params] = useSearchParams();
  const b = useBooking(params.get('service'));
  const topRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Bring the top of the wizard into view on each step change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [b.step, b.confirmed]);

  if (b.confirmed) {
    return (
      <S.Layout ref={topRef} $single>
        <S.Panel>
          <ConfirmationStep booking={b.confirmed} onReset={b.reset} />
        </S.Panel>
      </S.Layout>
    );
  }

  return (
    <S.Layout ref={topRef}>
      <S.Panel>
        <S.Progress aria-label="Booking progress">
          {STEPS.map((label, i) => {
            const state = i < b.step ? 'done' : i === b.step ? 'current' : 'todo';
            return (
              <S.ProgressItem key={label} $state={state} aria-current={i === b.step ? 'step' : undefined}>
                {state === 'done' ? (
                  <S.ProgressButton type="button" onClick={() => b.goTo(i)}>
                    {label}
                  </S.ProgressButton>
                ) : (
                  <span>{label}</span>
                )}
              </S.ProgressItem>
            );
          })}
        </S.Progress>

        {b.step === 0 && <ServiceStep selectedId={b.draft.serviceId} onSelect={b.selectService} />}

        {b.step === 1 && (
          <BarberStep selectedId={b.draft.barberId} onSelect={b.selectBarber} onBack={b.back} />
        )}

        {b.step === 2 && b.service && b.draft.barberId && (
          <DateTimeStep
            service={b.service}
            barberId={b.draft.barberId}
            date={b.draft.date}
            time={b.draft.time}
            error={b.slotError}
            onDate={b.selectDate}
            onTime={b.selectTime}
            onBack={b.back}
            onNext={b.next}
          />
        )}

        {b.step === 3 && (
          <DetailsStep
            customer={b.draft.customer}
            errors={b.errors}
            agreed={b.agreed}
            onChange={b.updateCustomer}
            onAgree={b.updateAgreed}
            onBack={b.back}
            onConfirm={b.confirm}
          />
        )}
      </S.Panel>

      <S.Summary aria-label="Booking summary">
        <S.SummaryTitle>Your booking</S.SummaryTitle>
        <S.SummaryList>
          <div><dt>Service</dt><dd>{b.service?.name ?? '—'}</dd></div>
          <div>
            <dt>Barber</dt>
            <dd>{b.draft.barberId === 'any' ? 'Any available' : b.barber?.name ?? '—'}</dd>
          </div>
          <div><dt>Date</dt><dd>{b.draft.date ? formatDateShort(b.draft.date) : '—'}</dd></div>
          <div><dt>Time</dt><dd>{b.draft.time ? formatTime(b.draft.time) : '—'}</dd></div>
          <div><dt>Duration</dt><dd>{b.service ? `${b.service.duration} min` : '—'}</dd></div>
        </S.SummaryList>
        <S.SummaryTotal>
          <span>Total</span>
          <strong>R{b.service?.price ?? 0}</strong>
        </S.SummaryTotal>
        <S.SummaryNote>Pay in store. Free cancellation up to 24 hours before.</S.SummaryNote>
      </S.Summary>
    </S.Layout>
  );
}