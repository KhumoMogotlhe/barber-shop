import type { Barber, Booking, Service } from '../types';
import { business, fullAddress } from '../data/business';
import { addMinutes, formatDateLong, formatTime } from './dates';

export interface CalendarEventInput {
  booking: Booking;
  service: Service;
  barber: Barber;
}

const toCalendarDateTime = (dateKey: string, time: string) =>
  `${dateKey.replace(/-/g, '')}T${time.replace(':', '')}00`; // e.g. 20260926T150000

const getEvent = ({ booking, service, barber }: CalendarEventInput) => {
  const endTime = addMinutes(booking.time, service.duration);

  return {
    title: `${service.name} at ${business.shortName}`,
    start: toCalendarDateTime(booking.date, booking.time),
    end: toCalendarDateTime(booking.date, endTime),
    location: `${business.name}, ${fullAddress}`,
    description: [
      `${service.name} with ${barber.name}`,
      `${formatDateLong(booking.date)}, ${formatTime(booking.time)} to ${formatTime(endTime)} (${service.duration} min)`,
      `Price: R${service.price}`,
      `Booking reference: ${booking.id}`,
      '',
      `Need to reschedule? Call ${business.phone} or email ${business.email} at least 24 hours before your appointment.`,
    ].join('\n'),
  };
};

/* Google Calendar */
export const buildGoogleCalendarUrl = (input: CalendarEventInput) => {
  const event = getEvent(input);
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${event.start}/${event.end}`,
    ctz: business.timezone, // interprets the times as Johannesburg time
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/* Apple Calendar, Outlook and others (.ics) */
const escapeIcs = (text: string) =>
  text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n');

// RFC 5545: lines longer than 75 octets must be folded
const foldLine = (line: string) => {
  const chunks: string[] = [];
  let rest = line;
  while (rest.length > 73) {
    chunks.push(rest.slice(0, 73));
    rest = rest.slice(73);
  }
  chunks.push(rest);
  return chunks.join('\r\n ');
};

const utcStamp = () => new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';

export const buildIcs = (input: CalendarEventInput) => {
  const event = getEvent(input);
  const tz = business.timezone;

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Sharp Line Barber Studio//Bookings//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VTIMEZONE',
    `TZID:${tz}`,
    'BEGIN:STANDARD',
    'DTSTART:19700101T000000',
    'TZOFFSETFROM:+0200',
    'TZOFFSETTO:+0200',
    'TZNAME:SAST',
    'END:STANDARD',
    'END:VTIMEZONE',
    'BEGIN:VEVENT',
    `UID:${input.booking.id}@sharplinestudio.co.za`,
    `DTSTAMP:${utcStamp()}`,
    `DTSTART;TZID=${tz}:${event.start}`,
    `DTEND;TZID=${tz}:${event.end}`,
    `SUMMARY:${escapeIcs(event.title)}`,
    `DESCRIPTION:${escapeIcs(event.description)}`,
    `LOCATION:${escapeIcs(event.location)}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'ACTION:DISPLAY',
    'DESCRIPTION:Your Sharp/Line appointment is in 1 hour',
    'TRIGGER:-PT1H',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return lines.map(foldLine).join('\r\n');
};

export const downloadIcs = (input: CalendarEventInput) => {
  const blob = new Blob([buildIcs(input)], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `sharpline-${input.booking.date}-${input.booking.time.replace(':', '')}.ics`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};