import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | Sharp/FADE Barber Studio`
      : 'Sharp/FADE Barber Studio | Fresh fades, zero wait';
  }, [title]);
}