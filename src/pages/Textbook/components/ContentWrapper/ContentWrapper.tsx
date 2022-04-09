import { FC } from 'react';
import { StyledContentWrapper } from './ContentWrapper.styles';

const ContentWrapper: FC = ({ children }) => {
  return (
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  )
};

export default ContentWrapper;
