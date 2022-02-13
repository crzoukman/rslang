export interface ISignIn {
  email: string;
  password: string;
}

export interface ILoadingPageData {
  savedGroupNumber: number;
  savedPageNumber: number;
}

export interface ICreateUserWord {
  userId: string;
  wordId: string;
  token: string;
}