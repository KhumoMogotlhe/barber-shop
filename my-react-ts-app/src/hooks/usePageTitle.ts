import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title
      ? `${title} | Sharp/Line Barber Studio`
      : 'Sharp/Line Barber Studio | Fresh fades, zero wait';
  }, [title]);
}