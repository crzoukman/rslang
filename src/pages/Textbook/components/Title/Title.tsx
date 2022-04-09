import { FC } from 'react';
import { StyledTitle } from './Title.styles';
import bookSVG from './assets/images/book.svg';

const Title: FC = ({ children }) => {
  return (
    <StyledTitle>
      <img src={bookSVG} alt="книга" />
      {children}
    </StyledTitle>
  )
};

export default Title;
