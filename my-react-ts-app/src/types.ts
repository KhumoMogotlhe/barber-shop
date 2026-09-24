export type ServiceCategory = 'cuts' | 'beard' | 'packages' | 'kids' | 'extras';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;        // in rand, whole numbers
  duration: number;     // in minutes, drives the calendar end time
  category: ServiceCategory;
  featured?: boolean;   // shown on the home page
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
  specialties: string[];
  workingDays: number[]; // 0 = Sunday … 6 = Saturday
}

export interface DayHours {
  day: number;           // 0 = Sunday … 6 = Saturday
  label: string;
  open: string | null;   // '09:00', or null when closed
  close: string | null;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

export interface Booking {
  id: string;
  serviceId: string;
  barberId: string;      // a barber id, or 'any'
  date: string;          // 'YYYY-MM-DD'
  time: string;          // 'HH:mm', 24-hour
  customer: Customer;
  createdAt: string;
}