import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { FaXmark } from 'react-icons/fa6';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import * as S from './Modal.styles';

interface Props {
  open: boolean;
  onClose: () => void; // wrap in useCallback in the parent
  labelledBy: string;
  closeOnDark?: boolean;
  children: ReactNode;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Modal({ open, onClose, labelledBy, closeOnDark, children }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      // Keep Tab focus inside the dialog
      if (e.key !== 'Tab' || !dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <S.Overlay
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <S.Dialog ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={labelledBy}>
        <S.Close type="button" aria-label="Close" onClick={onClose} $onDark={closeOnDark}>
          <FaXmark aria-hidden="true" />
        </S.Close>
        {children}
      </S.Dialog>
    </S.Overlay>,
    document.body
  );
}