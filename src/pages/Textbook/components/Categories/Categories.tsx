import { changeGroupNumber } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { getUserWords } from 'redux/thunks';
import CategoriesButton from '../CategoriesButton';
import { StyledCategories } from './Categories.styles';

const Categories = () => {
  const { authUserData } = useTypedSelector((state) => state.auth);

  const dispatch = useTypedDispatch();

  const onGroupChange = (number: number) => {
    localStorage.setItem('groupNumber-nsv', String(number));
    dispatch(changeGroupNumber({ groupNumber: number }));
  };

  const groupButtonData = [
    {
      color: '#a2defa',
      name: 'A1',
    },
    {
      color: '#91cb77',
      name: 'A2',
    },
    {
      color: '#ffe632',
      name: 'B1',
    },
    {
      color: '#fccc1a',
      name: 'B2',
    },
    {
      color: '#fb9902',
      name: 'C1',
    },
    {
      color: '#fc600a',
      name: 'C2',
    },
  ];

  const onLoadUserWords = () => {
    const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);

    dispatch(getUserWords({
      userId: authUser.userId,
      token: authUser.token,
    }));
  };

  const buttonElements = groupButtonData.map((b, idx) => (
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
        <CategoriesButton
          backgroundColor={'#319795'}
          onLoadUserWords={onLoadUserWords}
        >
          Сложные слова
        </CategoriesButton>
      )}
    </StyledCategories>
  );
};

export default Categories;