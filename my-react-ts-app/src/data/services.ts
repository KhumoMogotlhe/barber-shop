import type { Service, ServiceCategory } from '../types';

export const categoryLabels: Record<ServiceCategory, string> = {
  cuts: 'Haircuts and fades',
  beard: 'Beard and shave',
  packages: 'Packages',
  kids: 'Kids',
  extras: 'Extras',
};

export const services: Service[] = [
  // Haircuts and fades
  { id: 'skin-fade', name: 'Skin fade', category: 'cuts', price: 220, duration: 45, featured: true,
    description: 'Blended down to the skin with foil shavers, finished with a sharp line-up.' },
  { id: 'taper-fade', name: 'Taper fade', category: 'cuts', price: 200, duration: 45,
    description: 'Clean taper at the neckline and sideburns, length kept on top.' },
  { id: 'classic-cut', name: 'Classic cut', category: 'cuts', price: 180, duration: 30, featured: true,
    description: 'Clipper and scissor cut, styled to suit your hair and face shape.' },
  { id: 'scissor-cut', name: 'Scissor cut', category: 'cuts', price: 240, duration: 45,
    description: 'Full scissor work for longer styles and textured crops.' },
  { id: 'buzz-cut', name: 'Buzz cut', category: 'cuts', price: 120, duration: 30,
    description: 'One length all over, neatened edges and neckline.' },

  // Beard and shave
  { id: 'beard-trim', name: 'Beard trim and shape', category: 'beard', price: 120, duration: 30, featured: true,
    description: 'Trimmed, shaped and lined with a straight razor, finished with beard oil.' },
  { id: 'hot-towel-shave', name: 'Hot towel shave', category: 'beard', price: 200, duration: 45,
    description: 'Traditional straight-razor shave with hot towels and a cooling balm.' },

  // Packages
  { id: 'cut-and-beard', name: 'Cut and beard', category: 'packages', price: 300, duration: 60, featured: true,
    description: 'Any haircut plus a full beard trim and shape. Save R40.' },
  { id: 'the-full-line', name: 'The Full Line', category: 'packages', price: 420, duration: 90,
    description: 'Fade or cut, beard sculpt, hot towel, wash and style. The works.' },
  { id: 'father-and-son', name: 'Father and son', category: 'packages', price: 340, duration: 75,
    description: 'An adult cut and a kids cut, back to back in the same chair.' },

  // Kids
  { id: 'kids-cut', name: 'Kids cut (under 12)', category: 'kids', price: 130, duration: 30,
    description: 'A patient, no-rush cut for younger clients.' },
  { id: 'kids-fade', name: 'Kids fade (under 12)', category: 'kids', price: 150, duration: 30,
    description: 'Fades and tapers for kids, finished with a clean line-up.' },

  // Extras
  { id: 'line-up', name: 'Line-up', category: 'extras', price: 80, duration: 15,
    description: 'Crisp edges around the hairline, temples and neck between cuts.' },
  { id: 'hair-design', name: 'Hair design', category: 'extras', price: 100, duration: 30,
    description: 'Freehand lines and patterns cut into a fade.' },
  { id: 'grey-blending', name: 'Grey blending', category: 'extras', price: 180, duration: 30,
    description: 'Subtle colour to soften grey while keeping it natural.' },
];

export const featuredServices = services.filter((s) => s.featured);
export const getServiceById = (id: string) => services.find((s) => s.id === id);