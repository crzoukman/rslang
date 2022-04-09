import { FC, useEffect, useState } from "react"
import { setAnsweredWords, setCurrentCorrectAnswersSeries, setCurrentWordIndex, setIsGameOver, setIsSprintRunning, setLastBestSeries, setLastIntervalID } from "redux/features/sprintSlice";
import { useTypedDispatch, useTypedSelector } from "redux/hooks";
import Timer from "../Timer";
import { ButtonsWrapper, MidWord, Word, WordsWrapper, Wrapper } from "./Game.styled"
import usePrepareDataForAnswer from "./hooks/usePrepareDataForAnswer";
import correctSound from 'assets/sounds/correct_answer.wav';
import wrongSound from 'assets/sounds/wrong_answer.wav';
import Button from '@mui/material/Button';

const Game: FC = () => {
  const [isBtnsActive, setIsBtnsActive] = useState(true);
  const [currentWord, translation, enWord, id] = usePrepareDataForAnswer();
  const dispatch = useTypedDispatch();
  const {
    currentWordIndex,
    answeredWords,
    currentCorrectAnswersSeries,
    lastBestSeries,
    currentPlayedCollection,
    isSprintRunning
  } = useTypedSelector(state => state.sprint);

  const audioCorrect = new Audio(correctSound);
  const audioWrong = new Audio(wrongSound);

  function falseAnswer() {
    audioWrong.play();
    if (currentCorrectAnswersSeries > lastBestSeries) {
      dispatch(setLastBestSeries(currentCorrectAnswersSeries));
    }
    dispatch(setCurrentCorrectAnswersSeries(0));
    dispatch(setAnsweredWords({
      word: enWord,
      answerResult: false,
      translation,
      currentWord,
      id,
    }));
  }

  function clickHandler(answer: boolean) {
    if (isBtnsActive) {
      setIsBtnsActive(false);
      const result = currentWord === translation;

      if (result === answer) {
        audioCorrect.play();
        dispatch(setCurrentCorrectAnswersSeries(currentCorrectAnswersSeries + 1));
        dispatch(setAnsweredWords({
          word: enWord,
          answerResult: true,
          translation,
          currentWord,
          id,
        }));

      } else {
        falseAnswer();
      }
      dispatch(setCurrentWordIndex(currentWordIndex + 1));
      setTimeout(() => setIsBtnsActive(true), 500);

    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'ArrowLeft') clickHandler(false);
      if (e.code === 'ArrowRight') clickHandler(true);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [answeredWords, isBtnsActive, clickHandler,]);

  useEffect(() => {
    let timeoutID: NodeJS.Timer;
    if (currentWordIndex >= currentPlayedCollection.length - 1 && isSprintRunning && currentPlayedCollection.length > 0) {
      timeoutID = setTimeout(() => {
        dispatch(setIsSprintRunning(false));
        dispatch(setIsGameOver(true));
        dispatch(setLastIntervalID(timeoutID));
      }, 500);
    }

    return () => clearTimeout(timeoutID);
  }, [currentPlayedCollection, isSprintRunning, currentWordIndex]);

  return (
    <Wrapper>
      <Timer />

      <WordsWrapper>
        <Word>{enWord}</Word>
        <MidWord>это</MidWord>
        <Word>{currentWord}</Word>
      </WordsWrapper>

      <ButtonsWrapper>
        <Button
          onClick={() => clickHandler(false)}
          variant="outlined"
        >
          Нет
        </Button>

        <Button
          onClick={() => clickHandler(true)}
          variant="outlined"
        >
          Да
        </Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Game;