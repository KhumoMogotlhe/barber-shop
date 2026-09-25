import { useState } from 'react';
import type { Booking, Customer } from '../../types';
import { getServiceById } from '../../data/services';
import { getBarberById } from '../../data/barbers';
import { createBookingId, getBookings, saveBooking } from '../../lib/storage';
import { assignBarber } from './availability';

export const STEPS = ['Service', 'Barber', 'Date and time', 'Your details'] as const;

export interface Draft {
  serviceId: string | null;
  barberId: string | null;
  date: string | null;
  time: string | null;
  customer: Customer;
}

export type DetailErrors = Partial<Record<'name' | 'email' | 'phone' | 'terms', string>>;

const emptyCustomer: Customer = { name: '', email: '', phone: '', notes: '' };

export function useBooking(initialServiceId?: string | null) {
  const validInitial = initialServiceId && getServiceById(initialServiceId) ? initialServiceId : null;

  const [step, setStep] = useState(validInitial ? 1 : 0);
  const [draft, setDraft] = useState<Draft>({
    serviceId: validInitial,
    barberId: null,
    date: null,
    time: null,
    customer: emptyCustomer,
  });
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<DetailErrors>({});
  const [slotError, setSlotError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<Booking | null>(null);

  const service = draft.serviceId ? getServiceById(draft.serviceId) : undefined;
  const barber = draft.barberId && draft.barberId !== 'any' ? getBarberById(draft.barberId) : undefined;

  // Changing an earlier choice clears later ones that depend on it
  const selectService = (id: string) => {
    setDraft((d) => ({ ...d, serviceId: id, time: null }));
    setStep(1);
  };

  const selectBarber = (id: string) => {
    setDraft((d) => ({ ...d, barberId: id, date: null, time: null }));
    setStep(2);
  };

  const selectDate = (date: string) => setDraft((d) => ({ ...d, date, time: null }));

  const selectTime = (time: string) => {
    setSlotError(null);
    setDraft((d) => ({ ...d, time }));
  };

  const updateCustomer = (field: keyof Customer, value: string) => {
    setDraft((d) => ({ ...d, customer: { ...d.customer, [field]: value } }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const updateAgreed = (value: boolean) => {
    setAgreed(value);
    setErrors((e) => ({ ...e, terms: undefined }));
  };

  const validate = () => {
    const { name, email, phone } = draft.customer;
    const found: DetailErrors = {};
    if (name.trim().length < 2) found.name = 'Enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) found.email = 'Enter a valid email address.';
    if (phone.replace(/\D/g, '').length < 10) found.phone = 'Enter a valid mobile number (at least 10 digits).';
    if (!agreed) found.terms = 'Accept the terms and conditions to continue.';
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const confirm = () => {
    if (!validate() || !service || !draft.barberId || !draft.date || !draft.time) return;

    // Re-check the slot at the last moment, and resolve "any barber" to a real one
    const assigned = assignBarber(draft.date, draft.time, service, draft.barberId, getBookings());
    if (!assigned) {
      setSlotError('Sorry, that time was just taken. Pick another slot.');
      setDraft((d) => ({ ...d, time: null }));
      setStep(2);
      return;
    }

    const booking: Booking = {
      id: createBookingId(),
      serviceId: service.id,
      barberId: assigned.id,
      date: draft.date,
      time: draft.time,
      customer: {
        name: draft.customer.name.trim(),
        email: draft.customer.email.trim(),
        phone: draft.customer.phone.trim(),
        notes: draft.customer.notes?.trim(),
      },
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);
    setConfirmed(booking);
  };

  const reset = () => {
    setStep(0);
    setDraft({ serviceId: null, barberId: null, date: null, time: null, customer: emptyCustomer });
    setAgreed(false);
    setErrors({});
    setSlotError(null);
    setConfirmed(null);
  };

  return {
    step,
    draft,
    service,
    barber,
    agreed,
    errors,
    slotError,
    confirmed,
    goTo: setStep,
    back: () => setStep((s) => Math.max(0, s - 1)),
    next: () => setStep((s) => s + 1),
    selectService,
    selectBarber,
    selectDate,
    selectTime,
    updateCustomer,
    updateAgreed,
    confirm,
    reset,
  };
}