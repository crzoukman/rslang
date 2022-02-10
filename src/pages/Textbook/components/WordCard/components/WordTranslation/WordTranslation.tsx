import { FC } from 'react';
import { StyledWordTranslation } from './WordTranslation.styles';

const WordTranslation: FC = () => {
  return (
    <StyledWordTranslation>
      <span>Транскрипция</span>
      <span>Перевод</span>
      <button></button>
    </StyledWordTranslation>
  )
};

export default WordTranslation;