import { FC } from 'react';
import { StyledWordMeaning } from './WordMeaning.styles';

const WordMeaning: FC = () => {
  return (
    <StyledWordMeaning>
      <span>Значение</span>
      <p>Текст значения</p>
      <p>Перевод значения</p>
      <span>Пример</span>
      <p>Текст примера</p>
      <p>Перевод примера</p>
    </StyledWordMeaning>
  );
};

export default WordMeaning;