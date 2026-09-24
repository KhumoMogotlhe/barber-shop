export const business = {
  name: 'Sharp/Line Barber Studio',
  shortName: 'Sharp/Line',
  tagline: 'Fresh fades. Zero wait.',
  description:
    'A modern barber studio for sharp fades, clean lines and proper beard work. Book online, show up, sit straight down.',
  founded: 2019,
  address: {
    street: '48 Juta Street',
    suburb: 'Braamfontein',
    city: 'Johannesburg',
    postalCode: '2001',
    country: 'South Africa',
  },
  phone: '+27 10 500 4821',
  phoneHref: 'tel:+27105004821',
  email: 'hello@sharplinestudio.co.za',
  timezone: 'Africa/Johannesburg',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'TikTok', href: 'https://www.tiktok.com/', icon: 'tiktok' },
  ],
} as const;

export const fullAddress = [
  business.address.street,
  business.address.suburb,
  business.address.city,
  business.address.postalCode,
].join(', ');

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;