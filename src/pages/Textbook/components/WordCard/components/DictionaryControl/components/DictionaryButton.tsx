import { FC } from 'react';
import { StyledDictionaryButton } from './DictionaryButton.styles';

const DictionaryButton: FC = (props) => {
  const { children } = props;

  return (
    <StyledDictionaryButton>
      {children}
    </StyledDictionaryButton>
  )
}

export default DictionaryButton;