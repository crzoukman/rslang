import DictionaryButton from './components';
import { StyledDictionaryControl } from './DictionaryControl.styles';

const DictionaryControl = () => {
  return (
    <StyledDictionaryControl>
      <DictionaryButton>Сложное слово</DictionaryButton>
      <DictionaryButton>Изученное слово</DictionaryButton>
    </StyledDictionaryControl>
  );
}

export default DictionaryControl;