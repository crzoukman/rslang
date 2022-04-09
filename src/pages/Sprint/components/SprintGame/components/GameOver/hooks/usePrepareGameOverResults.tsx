import { useEffect, useState } from "react";
import { answeredWord } from "redux/features/sprintSlice/types";
import { useTypedSelector } from "redux/hooks";
import { correctAnswersNumber, getCorrectWords, getWrongWords } from "../utils";

const usePrepareGameOverResults = () => {
  const {
    answeredWords,
  } = useTypedSelector(state => state.sprint);
  const [correctAnswersPercentage, setCorrectAnswersPercentage] = useState('');
  const [answersBeenGiven, setAnswersBeenGiven] = useState<null | boolean>(null);
  const [correctWords, setCorrectWords] = useState<answeredWord[]>([]);
  const [wrongWords, setWrongWords] = useState<answeredWord[]>([]);

  useEffect(() => {
    const correctAnswersPercentage = (correctAnswersNumber(answeredWords) / answeredWords.length * 100)
      .toFixed(0);
    const answersBeenGiven = answeredWords.length !== 0;
    const correctWords = getCorrectWords(answeredWords);
    const wrongWords = getWrongWords(answeredWords);
    setCorrectAnswersPercentage(correctAnswersPercentage);
    setAnswersBeenGiven(answersBeenGiven);
    setCorrectWords(correctWords);
    setWrongWords(wrongWords);
  }, [answeredWords]);

  return {
    correctAnswersPercentage,
    answersBeenGiven,
    correctWords,
    wrongWords,
  };
};

export default usePrepareGameOverResults;