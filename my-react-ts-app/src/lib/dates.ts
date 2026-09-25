import { business } from '../data/business';

export const pad = (n: number) => String(n).padStart(2, '0');

/* Dates are stored as 'YYYY-MM-DD' strings and times as 'HH:mm' strings.
   This avoids JavaScript Date timezone shifts entirely. */

export const toDateKey = (d: Date) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export const parseDateKey = (key: string) => {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, m - 1, d); // local midnight, for weekday and display only
};

export const timeToMinutes = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
};

export const minutesToTime = (mins: number) => `${pad(Math.floor(mins / 60))}:${pad(mins % 60)}`;

export const addMinutes = (time: string, mins: number) => minutesToTime(timeToMinutes(time) + mins);

export const formatTime = (time: string) => {
  const [h, m] = time.split(':').map(Number);
  const period = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 || 12;
  return m === 0 ? `${hour}${period}` : `${hour}:${pad(m)}${period}`;
};

export const formatDateLong = (key: string) =>
  parseDateKey(key).toLocaleDateString('en-ZA', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const formatDateShort = (key: string) =>
  parseDateKey(key).toLocaleDateString('en-ZA', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });

/* The shop's current date and time, regardless of the visitor's timezone */
export const nowInShop = () => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: business.timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? '00';

  return {
    dateKey: `${get('year')}-${get('month')}-${get('day')}`,
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  };
};

export const getUpcomingDates = (count: number) => {
  const start = parseDateKey(nowInShop().dateKey);
  return Array.from({ length: count }, (_, i) =>
    toDateKey(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i))
  );
};