import { useEffect, useMemo, useState } from 'react';
import type { Service } from '../../types';
import { getBookings } from '../../lib/storage';
import { formatDateLong, formatTime, getUpcomingDates, parseDateKey } from '../../lib/dates';
import { BOOKING_WINDOW_DAYS, getAvailableSlots, getBarbersForDate, isShopOpen } from '../booking/availability';
import { Button } from '../../components/ui/Button';
import * as S from '../booking/Booking.styles';

interface Props {
  service: Service;
  barberId: string;
  date: string | null;
  time: string | null;
  error: string | null;
  onDate: (date: string) => void;
  onTime: (time: string) => void;
  onBack: () => void;
  onNext: () => void;
}

const groups = [
  { label: 'Morning', test: (t: string) => t < '12:00' },
  { label: 'Afternoon', test: (t: string) => t >= '12:00' && t < '17:00' },
  { label: 'Evening', test: (t: string) => t >= '17:00' },
];

export default function DateTimeStep({ service, barberId, date, time, error, onDate, onTime, onBack, onNext }: Props) {
  const [localError, setLocalError] = useState<string | null>(null);
  const bookings = useMemo(() => getBookings(), []);

  const days = useMemo(
    () =>
      getUpcomingDates(BOOKING_WINDOW_DAYS).map((key) => {
        const open = isShopOpen(key);
        const working = open && getBarbersForDate(key, barberId).length > 0;
        const slots = working ? getAvailableSlots(key, service, barberId, bookings) : [];
        const status = !open ? 'Closed' : !working ? 'Off' : slots.length === 0 ? 'Full' : null;
        return { key, slots, status };
      }),
    [service, barberId, bookings]
  );

  // Pre-select the first date that has free slots
  useEffect(() => {
    if (!date) {
      const first = days.find((d) => d.slots.length > 0);
      if (first) onDate(first.key);
    }
  }, [date, days, onDate]);

  const selectedDay = days.find((d) => d.key === date);

  const handleNext = () => {
    if (!time) {
      setLocalError('Choose a time to continue.');
      return;
    }
    onNext();
  };

  return (
    <>
      <S.StepTitle>Pick a date and time</S.StepTitle>
      <S.StepIntro>
        {service.name} takes about {service.duration} minutes. Times are in South African time (SAST).
      </S.StepIntro>

      <S.DateStrip role="group" aria-label="Available dates">
        {days.map((day) => {
          const d = parseDateKey(day.key);
          const selected = day.key === date;
          return (
            <S.DateButton
              key={day.key}
              type="button"
              $selected={selected}
              aria-pressed={selected}
              disabled={day.slots.length === 0}
              aria-label={`${formatDateLong(day.key)}${day.status ? `, ${day.status}` : ''}`}
              onClick={() => {
                setLocalError(null);
                onDate(day.key);
              }}
            >
              <span>{d.toLocaleDateString('en-ZA', { weekday: 'short' })}</span>
              <strong>{d.getDate()}</strong>
              <span>{day.status ?? d.toLocaleDateString('en-ZA', { month: 'short' })}</span>
            </S.DateButton>
          );
        })}
      </S.DateStrip>

      {selectedDay && (
        <>
          <S.SelectedDate>{formatDateLong(selectedDay.key)}</S.SelectedDate>
          {selectedDay.slots.length === 0 ? (
            <S.Empty>No times left on this day. Try another date.</S.Empty>
          ) : (
            groups.map((group) => {
              const slots = selectedDay.slots.filter(group.test);
              if (slots.length === 0) return null;
              return (
                <S.SlotGroup key={group.label}>
                  <S.CategoryTitle>{group.label}</S.CategoryTitle>
                  <S.SlotGrid>
                    {slots.map((slot) => (
                      <S.SlotButton
                        key={slot}
                        type="button"
                        $selected={slot === time}
                        aria-pressed={slot === time}
                        onClick={() => {
                          setLocalError(null);
                          onTime(slot);
                        }}
                      >
                        {formatTime(slot)}
                      </S.SlotButton>
                    ))}
                  </S.SlotGrid>
                </S.SlotGroup>
              );
            })
          )}
        </>
      )}

      {(error || localError) && <S.ErrorText role="alert">{error ?? localError}</S.ErrorText>}

      <S.Actions>
        <S.BackButton type="button" onClick={onBack}>
          ← Back
        </S.BackButton>
        <Button type="button" onClick={handleNext}>
          Continue
        </Button>
      </S.Actions>
    </>
  );
}