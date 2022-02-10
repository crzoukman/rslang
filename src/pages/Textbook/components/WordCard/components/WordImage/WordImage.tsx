import { FC } from 'react';
import { BASE_URL } from 'redux/thunks';
import { StyledWordImage } from './WordImage.styles';

const WordImage: FC<{ image: string }> = (props) => {
  const { image } = props;

  return (
    <StyledWordImage>
      <img src={`${BASE_URL}/${image}`} alt={image} />
    </StyledWordImage>
  )
};

export default WordImage;