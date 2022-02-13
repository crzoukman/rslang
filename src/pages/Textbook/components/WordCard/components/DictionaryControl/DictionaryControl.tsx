import { FC } from 'react';
import DictionaryButton from './components';
import { StyledDictionaryControl } from './DictionaryControl.styles';
import { IDictProps } from './types';

const DictionaryControl: FC<IDictProps> = (props) => {
  const { makeDifficult } = props;

  return (
    <StyledDictionaryControl>
      <DictionaryButton makeDifficult={makeDifficult}>Сложное слово</DictionaryButton>
      <DictionaryButton>Изученное слово</DictionaryButton>
    </StyledDictionaryControl>
  );
}

export default DictionaryControl;