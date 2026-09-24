import type { DayHours } from '../types';

export const hours: DayHours[] = [
  { day: 1, label: 'Monday', open: '09:00', close: '20:00' },
  { day: 2, label: 'Tuesday', open: '09:00', close: '20:00' },
  { day: 3, label: 'Wednesday', open: '09:00', close: '20:00' },
  { day: 4, label: 'Thursday', open: '09:00', close: '20:00' },
  { day: 5, label: 'Friday', open: '09:00', close: '20:00' },
  { day: 6, label: 'Saturday', open: '08:00', close: '17:00' },
  { day: 0, label: 'Sunday', open: '10:00', close: '14:00' },
];

export const SLOT_INTERVAL = 15; // minutes between bookable start times

export const getHoursForDay = (day: number) => hours.find((h) => h.day === day);