import { FC } from 'react';
import { StyledDictionaryButton } from './DictionaryButton.styles';
import { IDictBtnProps } from './types';

const DictionaryButton: FC<IDictBtnProps> = (props) => {
  const { makeDifficult, children } = props;

  return (
    <StyledDictionaryButton onClick={makeDifficult}>
      {children}
    </StyledDictionaryButton>
  )
}

export default DictionaryButton;