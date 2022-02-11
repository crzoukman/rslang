import { IWord } from "model/IWord";

export interface ITextbookState {
  words: IWord[];
  status: null | string;
  error: null;
  groupNumber: number;
  pageNumber: number;
}