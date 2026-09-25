import { services, categoryLabels } from '../../data/services';
import type { ServiceCategory } from '../../types';
import * as S from '../booking/Booking.styles';

interface Props {
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const order: ServiceCategory[] = ['cuts', 'beard', 'packages', 'kids', 'extras'];

export default function ServiceStep({ selectedId, onSelect }: Props) {
  return (
    <>
      <S.StepTitle>Choose a service</S.StepTitle>
      <S.StepIntro>No deposit needed. You pay in store by card or cash.</S.StepIntro>

      {order.map((category) => (
        <S.Category key={category}>
          <S.CategoryTitle>{categoryLabels[category]}</S.CategoryTitle>
          <S.OptionGrid>
            {services
              .filter((s) => s.category === category)
              .map((s) => (
                <S.OptionCard
                  key={s.id}
                  type="button"
                  $selected={selectedId === s.id}
                  aria-pressed={selectedId === s.id}
                  onClick={() => onSelect(s.id)}
                >
                  <S.CardTop>
                    <S.CardName>{s.name}</S.CardName>
                    <S.Price>R{s.price}</S.Price>
                  </S.CardTop>
                  <S.CardDesc>{s.description}</S.CardDesc>
                  <S.CardMeta>{s.duration} min</S.CardMeta>
                </S.OptionCard>
              ))}
          </S.OptionGrid>
        </S.Category>
      ))}
    </>
  );
}