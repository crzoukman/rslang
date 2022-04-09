import { FC } from 'react';
import { StyledWordMeaning } from './WordMeaning.styles';
import { IWordMeaningProps } from './types';

const WordMeaning: FC<IWordMeaningProps> = ({
  textExample,
  textExampleTranslate,
  textMeaning,
  textMeaningTranslate,
}) => {
  return (
    <StyledWordMeaning>
      <span>Значение</span>
      <p dangerouslySetInnerHTML={{ __html: textMeaning }} />
      <p>{textMeaningTranslate}</p>
      <span>Пример</span>
      <p dangerouslySetInnerHTML={{ __html: textExample }} />
      <p>{textExampleTranslate}</p>
    </StyledWordMeaning>
  );
};

export default WordMeaning;