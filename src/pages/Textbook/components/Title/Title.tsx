import { FC } from 'react';
import { StyledTitle } from './Title.styles';

const Title: FC = (props) => {
  const { children } = props;

  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
};

export default Title;
