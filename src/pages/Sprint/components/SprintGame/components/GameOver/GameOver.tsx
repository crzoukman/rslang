import { FC, useEffect } from "react";
import { clearAnsweredWords, setIsGameOver, setCurrentCorrectAnswersSeries, setLastBestSeries, setCurrentWordIndex, setIsStartedFromTextbook } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import { CorrectWrapper, FeedbackWrapper, H1Wrapper, H3CorrectWrapper, H3WrongWrapper, WordWrapper, Wrapper, WrongWrapper } from "./GameOver.styled";
import usePrepareGameOverResults from "./hooks/usePrepareGameOverResults";
import { IPrepareGameOver } from "./types";
import { getAudio } from "./utils";
import { getWordsId } from "./utils/getWordsId";
import { updateLocalStatistic, updateUserWordData } from 'shared/utils';
import { SPRINT } from "shared/utils/constants";
import { prepareNewStatistic } from "redux/features/statisticSlice/utils";
import { IStatistic } from "model/IStatistic";
import { IUserWord } from "model/IUserWord";
import { postUserWord, sendStatistic, updateUserWord } from "redux/thunks";
import { IWord } from "model/IWord";
import catSVG from './assets/images/cat.svg';
import correctSVG from './assets/images/correct.svg';
import soundSVG from './assets/images/sound.svg';
import wrongSVG from './assets/images/wrong.svg';
import Button from '@mui/material/Button';

const GameOver: FC = () => {
  const dispatch = useTypedDispatch();
  const {
    currentPlayedCollection,
    lastBestSeries,
    currentCorrectAnswersSeries,
  } = useTypedSelector(state => state.sprint);
  const prevStatistic = useTypedSelector(state => state.statistic.statisticData);
  const allWords = useTypedSelector(state => state.words.allWords);
  const {
    correctAnswersPercentage,
    answersBeenGiven,
    correctWords,
    wrongWords,
  }: IPrepareGameOver = usePrepareGameOverResults();

  function clickHandler() {
    dispatch(setIsGameOver(false));
    dispatch(clearAnsweredWords());
    dispatch(setCurrentCorrectAnswersSeries(0));
    dispatch(setCurrentWordIndex(0));
    dispatch(setLastBestSeries(0));
    dispatch(setIsStartedFromTextbook(false));
  }

  useEffect(() => {
    if (currentCorrectAnswersSeries > lastBestSeries) {
      dispatch(setLastBestSeries(currentCorrectAnswersSeries));
    }

  }, [currentCorrectAnswersSeries, lastBestSeries]);

  useEffect(() => {
    const correctAnswersIds = getWordsId(correctWords) as string[];
    const wrongAnswersIds = getWordsId(wrongWords) as string[];
    const authData = localStorage.getItem('authUserData-zm');
    const isAnyAnswers = Boolean([...correctAnswersIds, ...wrongAnswersIds].length);

    if (authData && isAnyAnswers) {
      const userData = JSON.parse(authData);
      const userId = userData.userId;
      const correctIWords: Array<IWord> = [];
      const wrongIWords: Array<IWord> = [];

      correctAnswersIds.forEach(el => {
        correctIWords.push(allWords.find(item => item._id === el)!);
      });
      wrongAnswersIds.forEach(el => {
        wrongIWords.push(allWords.find(item => item._id === el)!);
      });

      updateLocalStatistic(
        correctAnswersIds,
        wrongAnswersIds,
        SPRINT,
        lastBestSeries,
        userId,
      );

      const newStatistic = prepareNewStatistic(prevStatistic, [...correctAnswersIds, ...wrongAnswersIds]) as IStatistic;
      dispatch(sendStatistic({ userData, newStatistic }));
      correctIWords.forEach((el) => {

        const newUserWord = updateUserWordData(el, true, SPRINT) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));
      });

      wrongIWords.forEach((el) => {
        const newUserWord = updateUserWordData(el, false, SPRINT) as IUserWord;
        !('userWord' in el)
          ? dispatch(postUserWord({ newUserWord, userData }))
          : dispatch(updateUserWord({ newUserWord, userData }));

      });
    } else if (!authData && isAnyAnswers) {
      updateLocalStatistic(
        correctAnswersIds,
        wrongAnswersIds,
        SPRINT,
        lastBestSeries,
      );
    }
  }, [lastBestSeries, correctWords, wrongWords, currentPlayedCollection]);

  return (
    <Wrapper>
      <H1Wrapper>
        <img src={catSVG} alt="Игра закончилась" />
        <h1>Игра закончилась!</h1>
      </H1Wrapper>

      <FeedbackWrapper>
        <h2>Вы ответили правильно на {answersBeenGiven ? correctAnswersPercentage : 0}%</h2>
        <h2>Лучшая серия ответов: {lastBestSeries}</h2>
      </FeedbackWrapper>

      <CorrectWrapper>
        <H3CorrectWrapper>
          <img src={correctSVG} alt="правильные ответы" />
          <h3>Правильные ответы:</h3>
        </H3CorrectWrapper>
        {correctWords.map((word, idx) => {
          const audio = getAudio(currentPlayedCollection, word);

          return (
            <WordWrapper
              key={idx}
            >
              <img src={soundSVG} alt="звук" onClick={() => audio.play()} />
              <div>
                {word.word} - {word.currentWord}
              </div>
            </WordWrapper>
          )
        })}
      </CorrectWrapper>

      <WrongWrapper>
        <H3WrongWrapper>
          <img src={wrongSVG} alt="неправильные ответы" />
          <h3>Неправильные ответы:</h3>
        </H3WrongWrapper>
        {wrongWords.map((word, idx) => {
          const audio = getAudio(currentPlayedCollection, word);

          return (
            <WordWrapper
              key={idx}
              onClick={() => audio.play()}
            >
              <img src={soundSVG} alt="звук" onClick={() => audio.play()} />
              <div>
                {word.word} - {word.translation}
              </div>
            </WordWrapper>
          )
        })}
      </WrongWrapper>

      <Button
        variant="contained"
        onClick={clickHandler}
        sx={{ mt: 4, mb: 4 }}
      >
        Закончить
      </Button>
    </Wrapper>
  );
};

export default GameOver;