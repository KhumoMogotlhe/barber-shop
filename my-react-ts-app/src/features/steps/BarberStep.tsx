import { FaUserGroup } from 'react-icons/fa6';
import { barbers } from '../../data/barbers';
import * as S from '../booking/Booking.styles';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
  onBack: () => void;
}

const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const weekOrder = [1, 2, 3, 4, 5, 6, 0];

const initials = (name: string) => {
  const parts = name.split(' ');
  return `${parts[0][0]}${parts[parts.length - 1][0]}`;
};

export default function BarberStep({ selectedId, onSelect, onBack }: Props) {
  return (
    <>
      <S.StepTitle>Choose your barber</S.StepTitle>
      <S.StepIntro>Pick a favourite, or go with whoever is free for the most options.</S.StepIntro>

      <S.OptionGrid>
        <S.OptionCard
          type="button"
          $selected={selectedId === 'any'}
          aria-pressed={selectedId === 'any'}
          onClick={() => onSelect('any')}
        >
          <S.BarberRow>
            <S.Avatar>
              <FaUserGroup aria-hidden="true" />
            </S.Avatar>
            <div>
              <S.CardName>Any available barber</S.CardName>
              <br />
              <S.CardDesc>Most availability, same quality</S.CardDesc>
            </div>
          </S.BarberRow>
        </S.OptionCard>

        {barbers.map((b) => (
          <S.OptionCard
            key={b.id}
            type="button"
            $selected={selectedId === b.id}
            aria-pressed={selectedId === b.id}
            onClick={() => onSelect(b.id)}
          >
            <S.BarberRow>
              <S.Avatar aria-hidden="true">{initials(b.name)}</S.Avatar>
              <div>
                <S.CardName>{b.name}</S.CardName>
                <br />
                <S.CardDesc>{b.specialties.join(' · ')}</S.CardDesc>
              </div>
            </S.BarberRow>
            <S.CardMeta>
              Works {weekOrder.filter((d) => b.workingDays.includes(d)).map((d) => dayShort[d]).join(', ')}
            </S.CardMeta>
          </S.OptionCard>
        ))}
      </S.OptionGrid>

      <S.Actions>
        <S.BackButton type="button" onClick={onBack}>
          ← Back
        </S.BackButton>
      </S.Actions>
    </>
  );
}