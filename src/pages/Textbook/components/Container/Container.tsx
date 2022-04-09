import { FC } from 'react';
import { StyledContainer } from './Container.styles';

const Container: FC = ({ children }) => {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;
