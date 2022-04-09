import { changeGroupNumber, showDifficultWordsPage } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { getUserWords } from 'redux/thunks';
import CategoriesButton from '../CategoriesButton';
import { StyledCategories } from './Categories.styles';
import { groupButtonData, groupButtonDataX } from './config';
import { Button } from '@mui/material';

const Categories = () => {
  const { authUserData } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  const onGroupChange = (number: number) => {
    localStorage.setItem('groupNumber-nsv', String(number));
    dispatch(changeGroupNumber({ groupNumber: number }));
  };

  const onLoadUserWords = () => {
    dispatch(showDifficultWordsPage());
  };


  const buttonElements = groupButtonDataX.map((b, idx) => (
    <CategoriesButton
      key={idx + 1}
      backgroundColor={b.color}
      group={String(idx + 1)}
      onGroupChange={onGroupChange}
    >
      {b.name}
    </CategoriesButton>
  ));

  return (
    <StyledCategories>
      {buttonElements}
      {authUserData && (
        // <CategoriesButton
        //   backgroundColor={'#319795'}
        //   onLoadUserWords={onLoadUserWords}
        // >
        //   Сложные слова
        // </CategoriesButton>
        <Button
          variant="outlined"
          onClick={onLoadUserWords}
          style={{ width: '80px', fontSize: '12px' }}

        >Сложные слова</Button>
      )}
    </StyledCategories>
  );
};

export default Categories;