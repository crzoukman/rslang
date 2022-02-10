import { FC } from 'react';
import { StyledWordName } from './WordName.styles';

const WordName: FC <{ word: string }> = (props) => {
  const { word } = props;

  return (
    <StyledWordName>
      {word}
    </StyledWordName>
  )
};

export default WordName;