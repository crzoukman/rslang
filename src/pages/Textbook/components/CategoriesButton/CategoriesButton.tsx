import { FC } from 'react';
import { StyledCategoriesButton } from './CategoriesButton.styles';
import { IButtonProps } from './types';

const CategoriesButton: FC<IButtonProps> = (props) => {
  const { children, backgroundColor, group, onGroupChange } = props;

  return (
    <StyledCategoriesButton backgroundColor={backgroundColor}>
      <button
        data-group={group}
        onClick={() => onGroupChange && onGroupChange(Number(group))}
      >
        {children}
      </button>
    </StyledCategoriesButton>
  );
}

export default CategoriesButton;
