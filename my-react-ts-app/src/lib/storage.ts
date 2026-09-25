import type { Booking } from '../types';

const KEY = 'sharpline:bookings';

export const getBookings = (): Booking[] => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Booking[]) : [];
  } catch {
    return [];
  }
};

export const saveBooking = (booking: Booking) => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...getBookings(), booking]));
  } catch {
    // Storage blocked (e.g. some private modes). The booking still completes in the UI.
  }
};

export const createBookingId = () => `SL-${Date.now().toString(36).slice(-6).toUpperCase()}`;