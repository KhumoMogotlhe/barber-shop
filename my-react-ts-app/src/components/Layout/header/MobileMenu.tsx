import { mainNav } from '../../../data/navigation';
import { business, fullAddress } from '../../../data/business';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import * as S from './Header.styles';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  useLockBodyScroll(open);

  return (
    <S.MobilePanel id="mobile-menu" $open={open} aria-hidden={!open}>
      <nav aria-label="Mobile">
        <S.MobileList>
          {mainNav.map((item) => (
            <li key={item.to}>
              <S.MobileLink to={item.to} end={item.to === '/'} onClick={onClose}>
                {item.label}
              </S.MobileLink>
            </li>
          ))}
        </S.MobileList>
      </nav>

      <S.MobileBook to="/book" onClick={onClose}>
        Book an appointment
      </S.MobileBook>

      <S.MobileMeta>
        <a href={business.phoneHref}>{business.phone}</a>
        <a href={`mailto:${business.email}`}>{business.email}</a>
        <span>{fullAddress}</span>
      </S.MobileMeta>
    </S.MobilePanel>
  );
}