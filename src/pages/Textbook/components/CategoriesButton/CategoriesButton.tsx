import { FC } from 'react';
import { StyledCategoriesButton } from './CategoriesButton.styles';
import { IButtonProps } from './types';
import { Button } from '@mui/material';

const CategoriesButton: FC<IButtonProps> = (props) => {
  const { children, backgroundColor, group, onGroupChange, onLoadUserWords } = props;

  const clickHandler = () => {
    if (onGroupChange) {
      onGroupChange(Number(group));
    }

    if (onLoadUserWords) {
      onLoadUserWords();
    }
  }

  return (
    // <StyledCategoriesButton backgroundColor={backgroundColor}>
    //   {/* <button data-group={group} onClick={clickHandler}>
    //     {children}
    //   </button> */}


    // </StyledCategoriesButton>

    <Button
      variant="contained"
      data-group={group}
      onClick={clickHandler}
      style={{ background: backgroundColor, width: '80px' }}
      sx={{ mb: 1 }}
    >
      {children}
    </Button>
  );
}

export default CategoriesButton;
