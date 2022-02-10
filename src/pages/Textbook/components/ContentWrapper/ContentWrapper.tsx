import { FC } from 'react';
import { StyledContentWrapper } from './ContentWrapper.styles';

const ContentWrapper: FC = (props) => {
  const { children } = props;

  return (
    <StyledContentWrapper>
      {children}
    </StyledContentWrapper>
  )
};

export default ContentWrapper;
