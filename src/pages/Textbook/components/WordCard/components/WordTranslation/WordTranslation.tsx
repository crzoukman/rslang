import { FC } from 'react';
import { ITranslationProps } from './types';
import { StyledWordTranslation } from './WordTranslation.styles';

const WordTranslation: FC<ITranslationProps> = (props) => {
  const { transcription, translation } = props;

  return (
    <StyledWordTranslation>
      <span>{transcription}</span>
      <span>{translation}</span>
      <button></button>
    </StyledWordTranslation>
  )
};

export default WordTranslation;