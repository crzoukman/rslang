import CategoriesButton from '../CategoriesButton';
import { StyledCategories } from './Categories.styles';

const Categories = () => {
  return (
    <StyledCategories>
      <CategoriesButton backgroundColor={"#a2defa"} group="1">
        A1
      </CategoriesButton>
      <CategoriesButton backgroundColor={"#91cb77"} group="2">
        A2
      </CategoriesButton>
      <CategoriesButton backgroundColor={"#ffe632"} group="3">
        B1
      </CategoriesButton>
      <CategoriesButton backgroundColor={"#fccc1a"} group="4">
        B2
      </CategoriesButton>
      <CategoriesButton backgroundColor={"#fb9902"} group="5">
        C1
      </CategoriesButton>
      <CategoriesButton backgroundColor={"#fc600a"} group="6">
        C2
      </CategoriesButton>
    </StyledCategories>
  );
};

export default Categories;