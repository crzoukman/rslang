import { FC } from 'react';
import { StyledWordContent } from './WordContent.styles';

const WordContent: FC = ({ children }) => {
  return (
    <StyledWordContent>
      {children}
    </StyledWordContent>
  )
};

export default WordContent;