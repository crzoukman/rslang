import { FC, useEffect } from "react";
import { clearAnsweredWords, setCurrentCorrectAnswersSeries, setCurrentPlayedCollection, setCurrentWordIndex, setIsGameOver, setIsSprintRunning, setIsStartedFromTextbook, setLastBestSeries } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { fetchAllWords, fetchUserWords, getStatistic } from "redux/thunks";
import { getWordsFromTextbookForUser, shuffleArray } from "shared/utils";
import SprintGame from "./components/SprintGame";
import SprintHeader from "./components/SprintHeader";
import { Wrapper } from "./Sprint.styled";

const Sprint: FC = () => {
  const dispatch = useTypedDispatch();
  const { isStartedFromTextbook } = useTypedSelector(state => state.sprint);
  const { allWords } = useTypedSelector(state => state.words);
  const pageNumber = localStorage.getItem('pageNumber-nsv') ? Number(localStorage.getItem('pageNumber-nsv')) - 1 : 0;
  const groupNumber = localStorage.getItem('groupNumber-nsv') ? Number(localStorage.getItem('groupNumber-nsv')) - 1 : 0;

  useEffect(() => {
    dispatch(fetchAllWords());
    dispatch(setIsGameOver(false));
    dispatch(clearAnsweredWords());
    dispatch(setCurrentCorrectAnswersSeries(0));
    dispatch(setCurrentWordIndex(0));
    dispatch(setLastBestSeries(0));
  }, []);

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');

    if (authData) {
      (async () => {
        if (isStartedFromTextbook) {
          await dispatch(getStatistic(JSON.parse(authData)));
          // await dispatch(fetchAllWords());
          await dispatch(fetchUserWords(JSON.parse(authData)));
          const wordsForTextBook = getWordsFromTextbookForUser(allWords, groupNumber, pageNumber, 20);
          const shuffled = shuffleArray(wordsForTextBook);
          dispatch(setIsSprintRunning(true));
          dispatch(setCurrentPlayedCollection(shuffled));
          dispatch(setIsStartedFromTextbook(false));
        }
      })();
    } else {
      (async () => {
        if (isStartedFromTextbook) {
          // await dispatch(fetchAllWords());
          const wordsForTextBook = getWordsFromTextbookForUser(allWords, groupNumber, pageNumber, 20);
          const shuffled = shuffleArray(wordsForTextBook);
          dispatch(setIsSprintRunning(true));
          dispatch(setCurrentPlayedCollection(shuffled));
          dispatch(setIsStartedFromTextbook(false));
        }
      })();
    }
  }, [isStartedFromTextbook]);

  return (
    <Wrapper>
      <SprintHeader />
      <SprintGame />
    </Wrapper>
  )
};


export default Sprint;

