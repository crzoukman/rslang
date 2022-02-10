import { FC } from 'react';
import { StyledCategoriesButton } from './CategoriesButton.styles';
import { IButtonProps } from './types';

const CategoriesButton: FC<IButtonProps> = (props) => {
  const { children, backgroundColor, group } = props;

  return (
    <StyledCategoriesButton backgroundColor={backgroundColor}>
      <button data-group={group}>{children}</button>
    </StyledCategoriesButton>
  )
}

export default CategoriesButton;
