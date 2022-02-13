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
}