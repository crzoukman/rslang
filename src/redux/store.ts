import { combineReducers, configureStore } from "@reduxjs/toolkit";
import registration from 'redux/features/registrationSlice';
import auth from 'redux/features/authSlice';
import textbook from './features/textbookSlice/textBookSlice';

const rootReducer = combineReducers({
  registration,
  auth,
  textbook,
});

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
