import { IUserWord } from "model/IUserWord";

export interface IWordControlProps {
  mode: string;
  userWord: IUserWord | undefined;
  onDifficultClick: () => void;
  onDeleteWord: () => void;
  onLearnedClick: () => void;
}