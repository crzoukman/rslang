import { FC } from 'react';
import { StyledWordImage } from './WordImage.styles';

const WordImage: FC = () => {
  return (
    <StyledWordImage>
      <img src={'https://via.placeholder.com/150'} alt="image" />
    </StyledWordImage>
  )
};

export default WordImage;