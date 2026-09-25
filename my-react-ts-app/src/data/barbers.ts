import type { Barber } from '../types';

export const barbers: Barber[] = [
  {
    id: 'thabo',
    name: 'Thabo Mokoena',
    role: 'Founder and head barber',
    bio: 'Thabo opened Sharp/FADE in 2019 after ten years cutting in Soweto and Rosebank. Precise, fast and obsessed with a clean blend.',
    photo: '/images/barbers/thabo.webp',
    specialties: ['Skin fades', 'Tapers', 'Line-ups'],
    workingDays: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 'liam',
    name: 'Liam van der Merwe',
    role: 'Senior barber',
    bio: 'Trained in classic barbering, Liam is the one to see for scissor work and a proper hot towel shave.',
    photo: '/images/barbers/liam.webp',
    specialties: ['Scissor cuts', 'Hot towel shaves', 'Classic styles'],
    workingDays: [2, 3, 4, 5, 6, 0],
  },
  {
    id: 'ayesha',
    name: 'Ayesha Khan',
    role: 'Barber and designer',
    bio: 'Ayesha brings the creativity: freehand designs, textured crops, and a calm chair that kids love.',
    photo: '/images/barbers/ayesha.webp',
    specialties: ['Hair designs', 'Kids cuts', 'Textured crops'],
    workingDays: [1, 3, 4, 5, 6, 0],
  },
  {
    id: 'sipho',
    name: 'Sipho Dlamini',
    role: 'Barber and beard specialist',
    bio: 'Sipho treats every beard like a sculpture. Sharp razor lines, even shape, zero patchiness.',
    photo: '/images/barbers/sipho.webp',
    specialties: ['Beard sculpting', 'Razor lines', 'Grey blending'],
    workingDays: [1, 2, 4, 5, 6],
  },
];

export const getBarberById = (id: string) => barbers.find((b) => b.id === id);