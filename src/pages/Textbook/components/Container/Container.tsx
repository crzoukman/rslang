import { FC } from 'react';
import { StyledContainer } from './Container.styles';

const Container: FC = (props) => {
  const { children } = props;

  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;
