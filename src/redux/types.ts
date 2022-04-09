import { IAuth } from 'model/IAuth';
import { IStatistic } from 'model/IStatistic';
import { IUserWord } from 'model/IUserWord';

export interface ISignIn {
  email: string;
  password: string;
}

export interface ILoadingPageData {
  savedGroupNumber: number;
  savedPageNumber: number;
}

export interface IGetUserWords {
  userId: string;
  token: string;
}

export interface ICreateUserWord {
  userId: string;
  wordId: string;
  token: string;
  wordData: IUserWord;
}

export interface IDeleteUserWord {
  userId: string;
  wordId: string;
  token: string;
}

export interface ISendStatistic {
  userData: IAuth;
  newStatistic: IStatistic;
}

export interface IPostUserWord {
  newUserWord: IUserWord;
  userData: IAuth;
}
