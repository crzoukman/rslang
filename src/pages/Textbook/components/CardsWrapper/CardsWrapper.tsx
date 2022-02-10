import { FC } from 'react';import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';

const CardsWrapper: FC = () => {
  const { words } = useTypedSelector((state) => state.textbook);

  const wordCards = words.map((w) => <WordCard key={w.id} {...w} />);

  return (
    <StyledCardsWrapper>
      {wordCards}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
