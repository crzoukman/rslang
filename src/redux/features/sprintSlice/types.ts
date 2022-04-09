import { IWord } from "model/IWord";

export interface answeredWord {
  word: string | null | undefined;
  answerResult: boolean | null;
  translation: string | null | undefined;
  currentWord: string | null | undefined;
  id: string | null | undefined;

};

export interface ISprintState {
  isSprintRunning: boolean;
  isGameOver: boolean;
  currentPlayedCollection: IWord[];
  currentWordIndex: number;
  pickedGroup: null | number;
  answeredWords: answeredWord[];
  lastBestSeries: number;
  currentCorrectAnswersSeries: number;
  isStartedFromTextbook: boolean;
  isTextbookWordsFetching: boolean;
  lastIntervalID: NodeJS.Timer | null;
};