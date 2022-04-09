import { combineReducers, configureStore } from '@reduxjs/toolkit';
import registration from 'redux/features/registrationSlice';
import auth from 'redux/features/authSlice';
import challenge from './features/challengeSlice';
import textbook from './features/textbookSlice/textBookSlice';
import words from './features/wordsSlice';
import sprint from './features/sprintSlice';
import statistic from './features/statisticSlice';

const rootReducer = combineReducers({
  registration,
  auth,
  challenge,
  textbook,
  words,
  sprint,
  statistic,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type TState = ReturnType<typeof rootReducer>;
export type TDispatch = typeof store.dispatch;
