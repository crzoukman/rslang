import { IWord } from "model/IWord";
import { answeredWord } from "redux/features/sprintSlice/types";

export type TGetAudio = (arr: IWord[] | null, word: answeredWord) => HTMLAudioElement;

export interface IPrepareGameOver {
  correctAnswersPercentage: string;
  answersBeenGiven: boolean | null;
  correctWords: answeredWord[];
  wrongWords: answeredWord[];
}