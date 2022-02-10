import { FC } from 'react';
import { StyledWordContent } from './WordContent.styles';

const WordContent: FC = (props) => {
  const { children } = props;

  return (
    <StyledWordContent>
      {children}
    </StyledWordContent>
  )
};

export default WordContent;