import { buildGoogleCalendarUrl, downloadIcs } from '../lib/calendar';
import { getServiceById } from '../data/services';
import { getBarberById } from '../data/barbers';
import type { Booking } from '../types';

const booking: Booking = {
  id: 'SL-TEST01',
  serviceId: 'skin-fade',
  barberId: 'thabo',
  date: '2026-09-26',
  time: '15:00',
  customer: { name: 'Test', email: 'test@example.com', phone: '0820000000' },
  createdAt: new Date().toISOString(),
};

export default function Book() {
  const input = { booking, service: getServiceById('skin-fade')!, barber: getBarberById('thabo')! };
  return (
    <div style={{ padding: '4rem 1rem', display: 'flex', gap: '1rem' }}>
      <a href={buildGoogleCalendarUrl(input)} target="_blank" rel="noopener noreferrer">Google Calendar</a>
      <button onClick={() => downloadIcs(input)}>Download .ics</button>
    </div>
  );
}