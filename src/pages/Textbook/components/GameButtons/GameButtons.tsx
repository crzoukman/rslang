import { Link } from 'react-router-dom';
import { useTypedDispatch } from 'redux/hooks';
import { StyledWrapper, GameButton } from './GameButtons.styles';
import { setGameFromTextbook } from 'redux/features/challengeSlice';
import audiochallengeImg from '../../../../assets/images/audiochallenge.png';
import sprintImg from '../../../../assets/images/sprint.png';
import { setIsStartedFromTextbook } from 'redux/features/sprintSlice';
import { FC } from 'react';
import { ICardsContainerProps } from '../CardsWrapper/components/types';

const GameButtons: FC<ICardsContainerProps> = ({ learnedWordCount }) => {
  const dispatch = useTypedDispatch();

  const handleAudiochallengeClick = () => {
    dispatch(setGameFromTextbook());
  };

  const sprintHandler = () => {
    dispatch(setIsStartedFromTextbook(true));
  };

  return (
    <StyledWrapper learnedWordCount={learnedWordCount}>
      <Link to='/sprint'>
        <GameButton
          img={sprintImg}
          onClick={() => sprintHandler()}
        >
          Спринт
        </GameButton>
      </Link>

      <Link to='/audiochallenge'>
        <GameButton
          img={audiochallengeImg}
          onClick={() => handleAudiochallengeClick()}
        >
          Аудиовызов
        </GameButton>
      </Link>
    </StyledWrapper>
  );
};

export default GameButtons;