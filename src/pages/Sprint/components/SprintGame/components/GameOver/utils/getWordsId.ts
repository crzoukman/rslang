import { answeredWord } from "redux/features/sprintSlice/types";

type union = string | null | undefined
type TGetWordsId = (arg: answeredWord[]) => union[];

export const getWordsId: TGetWordsId = (arr) => {
  return arr.map(item => item.id).filter(el => el !== undefined && el !== null);
};