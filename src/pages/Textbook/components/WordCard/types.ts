import { IWord } from "model/IWord";

export interface IWordCardProps {
  word: IWord;
  player: HTMLAudioElement;
  makeDifficult: (id: string) => void;
  deleteWord: (id: string) => void;
  makeLearned: (id: string) => void;
}