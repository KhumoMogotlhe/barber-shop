import type { Barber, Booking, Service } from '../../types';
import { barbers } from '../../data/barbers';
import { getServiceById } from '../../data/services';
import { getHoursForDay, SLOT_INTERVAL } from '../../data/hours';
import { nowInShop, parseDateKey, timeToMinutes, minutesToTime } from '../../lib/dates';

export const BOOKING_WINDOW_DAYS = 21;
const MIN_NOTICE_MINUTES = 30;

export const isShopOpen = (dateKey: string) => {
  const hours = getHoursForDay(parseDateKey(dateKey).getDay());
  return Boolean(hours?.open && hours.close);
};

export const getBarbersForDate = (dateKey: string, barberId: string): Barber[] => {
  const day = parseDateKey(dateKey).getDay();
  const pool = barberId === 'any' ? barbers : barbers.filter((b) => b.id === barberId);
  return pool.filter((b) => b.workingDays.includes(day));
};

const isBarberFree = (
  barberId: string,
  dateKey: string,
  start: number,
  end: number,
  bookings: Booking[]
) =>
  bookings
    .filter((b) => b.barberId === barberId && b.date === dateKey)
    .every((b) => {
      const bStart = timeToMinutes(b.time);
      const bEnd = bStart + (getServiceById(b.serviceId)?.duration ?? 30);
      return end <= bStart || start >= bEnd; // no overlap
    });

export const getAvailableSlots = (
  dateKey: string,
  service: Service,
  barberId: string,
  bookings: Booking[]
): string[] => {
  const hours = getHoursForDay(parseDateKey(dateKey).getDay());
  if (!hours?.open || !hours.close) return [];

  const candidates = getBarbersForDate(dateKey, barberId);
  if (candidates.length === 0) return [];

  const now = nowInShop();
  if (dateKey < now.dateKey) return [];
  const earliest = dateKey === now.dateKey ? now.minutes + MIN_NOTICE_MINUTES : 0;

  const open = timeToMinutes(hours.open);
  const close = timeToMinutes(hours.close);
  const slots: string[] = [];

  // The appointment must finish by closing time
  for (let start = open; start + service.duration <= close; start += SLOT_INTERVAL) {
    if (start < earliest) continue;
    const end = start + service.duration;
    if (candidates.some((b) => isBarberFree(b.id, dateKey, start, end, bookings))) {
      slots.push(minutesToTime(start));
    }
  }

  return slots;
};

/* Resolves 'any' to a real barber who is free at that time */
export const assignBarber = (
  dateKey: string,
  time: string,
  service: Service,
  barberId: string,
  bookings: Booking[]
) => {
  const start = timeToMinutes(time);
  const end = start + service.duration;
  return getBarbersForDate(dateKey, barberId).find((b) =>
    isBarberFree(b.id, dateKey, start, end, bookings)
  );
};