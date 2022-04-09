import { FC, useEffect } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { fetchAllWords, fetchUserWords, getStatistic, sendStatistic } from 'redux/thunks';
import { NUM_OF_QUESTIONS, setAnswersSet, setInitialChallengeState, setWordsByLevel, startChallenge, startChallengeByLevel } from 'redux/features/challengeSlice';
import ChallengeCard from './components/ChallengeCard';
import ResultsTable from './components/ResultsTable';

import { StyledAlert, Wrapper } from './Audiochallenge.styles';
import { getWordsByPageAndGroup, getWordsFromTextbookForUser, shuffleArray } from 'shared/utils';
import { Alert, CircularProgress } from '@mui/material';
import LevelPicker from './components/LevelPicker';

const Audiochallenge: FC = () => {
  const { isStartedFromTextbook, isChallengeStarted, showResult, currentQuestionsSet } = useTypedSelector(state => state.challenge);
  const { fetchAllWordsFulfilled, allWords } = useTypedSelector(state => state.words);
  const group = localStorage.getItem('groupNumber-nsv') ? Number(localStorage.getItem('groupNumber-nsv')) - 1 : 0;
  const page = localStorage.getItem('pageNumber-nsv') ? Number(localStorage.getItem('pageNumber-nsv')) - 1 : 0;
  const dispatch = useTypedDispatch();
  const user = localStorage.getItem('authUserData-zm');
  const isShowLevel = !isStartedFromTextbook && !isChallengeStarted && !showResult && fetchAllWordsFulfilled;

  useEffect(() => {
    if (!user) {
      const startGame = async () => {
        await dispatch(fetchAllWords());
        if (isStartedFromTextbook) {
          dispatch(setAnswersSet(allWords));
          const currentWords = shuffleArray(getWordsByPageAndGroup(allWords, group, page)).slice(NUM_OF_QUESTIONS);
          await dispatch(setWordsByLevel(currentWords));
          dispatch(startChallenge());
        }
      }
      startGame();
    }

    if (user) {
      dispatch(getStatistic(JSON.parse(user)));
      const startGame = async () => {
        await dispatch(fetchAllWords());
        await dispatch(fetchUserWords(JSON.parse(user)));
        if (isStartedFromTextbook) {
          dispatch(setAnswersSet(allWords));
          const currentWords = getWordsFromTextbookForUser(allWords, group, page, NUM_OF_QUESTIONS);
          dispatch(setWordsByLevel(currentWords));
          dispatch(startChallenge());
        }
      };
      startGame();
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setInitialChallengeState());
    };
  }, []);

  return (
    <Wrapper>
      {!fetchAllWordsFulfilled && <CircularProgress />}
      {isChallengeStarted && !currentQuestionsSet.length && <StyledAlert severity="info">Слова для игры не найдены. Перезапустите игру.</StyledAlert>}
      {isShowLevel && <LevelPicker />}
      {fetchAllWordsFulfilled && isChallengeStarted && !showResult && currentQuestionsSet.length && <ChallengeCard />}
      {showResult && <ResultsTable />}
    </Wrapper>
  );
};

export default Audiochallenge;
