import { FC } from 'react';
import { StyledWordName } from './WordName.styles';

const WordName: FC <{ word: string }> = ({ word }) => {
  return (
    <StyledWordName>
      {word}
    </StyledWordName>
  )
};

export default WordName;