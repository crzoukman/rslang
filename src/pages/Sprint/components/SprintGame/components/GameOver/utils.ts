import { answeredWord } from "redux/features/sprintSlice/types";
import { BASE_URL } from "redux/thunks";
import { TGetAudio } from './types';

export const correctAnswersNumber = (arr: answeredWord[]): number => {
  let counter = 0;
  for (const item of arr) {
    if (item.answerResult) counter++;
  }
  return counter;
};

export const getCorrectWords = (arr: answeredWord[]) => {
  return arr.filter(word => word.answerResult === true);
};

export const getWrongWords = (arr: answeredWord[]) => {
  return arr.filter(word => word.answerResult === false);
};

export const getAudio: TGetAudio = (arr, word) => {
  const data = arr?.find(item => item.word === word.word);
  const audio = new Audio();
  audio.src = BASE_URL + '/' + data?.audio;
  return audio;
};