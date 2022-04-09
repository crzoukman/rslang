import { StyledButtonsRow } from './LevelPicker.styles';
import { FC } from 'react';
import { Wrapper } from './LevelPicker.styles';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { getWordsByGroup, shuffleArray } from 'shared/utils';
import { NUM_OF_QUESTIONS, setAnswersSet, setWordsByLevel, startChallengeByLevel } from 'redux/features/challengeSlice';

const LevelPicker: FC = () => {
  const challengeLevels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const { allWords } = useTypedSelector(state => state.words);
  const dispatch = useTypedDispatch();

  const onSubmitLevel = (level: number) => {
    const levelWords = getWordsByGroup(allWords, level);
    const gameSet = shuffleArray(levelWords).slice(0, NUM_OF_QUESTIONS);
    dispatch(setAnswersSet(levelWords));
    dispatch(setWordsByLevel(gameSet));
    dispatch(startChallengeByLevel(level.toString()));
  }
  return (
    <Wrapper>
      <h2>Выберите сложность:</h2>
      <StyledButtonsRow>
        {challengeLevels.map(el =>
          <div key={el} onClick={() => onSubmitLevel(challengeLevels.indexOf(el))}>{el}</div>
        )}
      </StyledButtonsRow>
    </Wrapper>)
}

export default LevelPicker;


