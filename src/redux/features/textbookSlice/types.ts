import { IWord } from "model/IWord";

export interface ITextbookState {
  words: IWord[];
  difficultWords: IWord[];
  status: null | string;
  error: null;
  groupNumber: number;
  pageNumber: number;
  mode: string;
  isWordDeleted: boolean;
}