import { IAuth } from "model/IAuth";

export interface IAuthState {
  authUserData: null | IAuth;
  isSigningIn: boolean;
  signingInError: null | string;
  enteringFlag: boolean;
}