import { changeGroupNumber } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch } from 'redux/hooks';
import CategoriesButton from '../CategoriesButton';
import { StyledCategories } from './Categories.styles';

const Categories = () => {
  const dispatch = useTypedDispatch();

  const onGroupChange = (number: number) => {
    dispatch(changeGroupNumber({ groupNumber: number }));
  }

  return (
    <StyledCategories>
      <CategoriesButton
        backgroundColor={"#a2defa"}
        group="1"
        onGroupChange={onGroupChange}
      >
        A1
      </CategoriesButton>
      <CategoriesButton
        backgroundColor={"#91cb77"}
        group="2"
        onGroupChange={onGroupChange}
      >
        A2
      </CategoriesButton>
      <CategoriesButton
        backgroundColor={"#ffe632"}
        group="3"
        onGroupChange={onGroupChange}
      >
        B1
      </CategoriesButton>
      <CategoriesButton
        backgroundColor={"#fccc1a"}
        group="4"
        onGroupChange={onGroupChange}
      >
        B2
      </CategoriesButton>
      <CategoriesButton
        backgroundColor={"#fb9902"}
        group="5"
        onGroupChange={onGroupChange}
      >
        C1
      </CategoriesButton>
      <CategoriesButton
        backgroundColor={"#fc600a"}
        group="6"
        onGroupChange={onGroupChange}
      >
        C2
      </CategoriesButton>
    </StyledCategories>
  );
};

export default Categories;