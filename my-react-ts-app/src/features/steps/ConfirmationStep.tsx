import { Link } from 'react-router-dom';
import { FaApple, FaCheck, FaGoogle } from 'react-icons/fa6';
import type { Booking } from '../../types';
import { getServiceById } from '../../data/services';
import { getBarberById } from '../../data/barbers';
import { fullAddress } from '../../data/business';
import { addMinutes, formatDateLong, formatTime } from '../../lib/dates';
import { buildGoogleCalendarUrl, downloadIcs } from '../../lib/calendar';
import { Button } from '../../components/ui/Button';
import * as S from '../booking/Booking.styles';

interface Props {
  booking: Booking;
  onReset: () => void;
}

export default function ConfirmationStep({ booking, onReset }: Props) {
  const service = getServiceById(booking.serviceId);
  const barber = getBarberById(booking.barberId);
  if (!service || !barber) return null;

  const input = { booking, service, barber };
  const endTime = addMinutes(booking.time, service.duration);
  const firstName = booking.customer.name.split(' ')[0];

  return (
    <>
      <S.SuccessIcon>
        <FaCheck aria-hidden="true" />
      </S.SuccessIcon>
      <S.StepTitle>You're booked, {firstName}</S.StepTitle>
      <S.StepIntro>
        Your reference is <strong>{booking.id}</strong>. Mention it when you arrive.
      </S.StepIntro>

      <S.DetailList>
        <div><dt>Service</dt><dd>{service.name}</dd></div>
        <div><dt>Barber</dt><dd>{barber.name}</dd></div>
        <div><dt>Date</dt><dd>{formatDateLong(booking.date)}</dd></div>
        <div><dt>Time</dt><dd>{formatTime(booking.time)} – {formatTime(endTime)}</dd></div>
        <div><dt>Where</dt><dd>{fullAddress}</dd></div>
        <div><dt>Price</dt><dd>R{service.price}, pay in store</dd></div>
      </S.DetailList>

      <S.CalendarTitle>Add it to your calendar</S.CalendarTitle>
      <S.CalendarButtons>
        <S.CalendarLink href={buildGoogleCalendarUrl(input)} target="_blank" rel="noopener noreferrer">
          <FaGoogle aria-hidden="true" /> Google Calendar
        </S.CalendarLink>
        <S.CalendarButton type="button" onClick={() => downloadIcs(input)}>
          <FaApple aria-hidden="true" /> Apple Calendar
        </S.CalendarButton>
      </S.CalendarButtons>
      <S.Hint>The Apple Calendar option downloads an .ics file, which also works with Outlook.</S.Hint>

      <S.Actions>
        <S.BackButton type="button" onClick={onReset}>
          Book another appointment
        </S.BackButton>
        <Button as={Link} to="/">
          Back to home
        </Button>
      </S.Actions>
    </>
  );
}