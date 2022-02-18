import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWord } from "model/IWord";
import { answeredWord, ISprintState } from "./types";

const initialState: ISprintState = {
  isSprintRunning: false,
  isGameOver: false,
  currentPlayedCollection: [],
  currentWordIndex: 0,
  pickedGroup: null,
  answeredWords: [],
  lastBestSeries: 0,
  currentCorrectAnswersSeries: 0,
};

export const sprintSlice = createSlice({
  name: 'sprint',
  initialState,
  reducers: {
    setIsSprintRunning(state, action: PayloadAction<boolean>) {
      state.isSprintRunning = action.payload;
    },
    setIsGameOver(state, action: PayloadAction<boolean>) {
      state.isGameOver = action.payload;
    },
    setCurrentPlayedCollection(state, action: PayloadAction<IWord[]>) {
      state.currentPlayedCollection = action.payload;
    },
    setPickedGroup(state, action: PayloadAction<null | number>) {
      state.pickedGroup = action.payload;
    },
    setCurrentWordIndex(state, action: PayloadAction<number>) {
      state.currentWordIndex = action.payload;
    },
    setAnsweredWords(state, action: PayloadAction<answeredWord>) {
      state.answeredWords.push(action.payload);
    },
    clearAnsweredWords(state) {
      state.answeredWords = [];
    },
    setCurrentCorrectAnswersSeries(state, action: PayloadAction<number>) {
      state.currentCorrectAnswersSeries = action.payload;
    },
    setLastBestSeries(state, action: PayloadAction<number>) {
      state.lastBestSeries = action.payload;
    },
  },
});

export const {
  setIsSprintRunning,
  setIsGameOver,
  setCurrentPlayedCollection,
  setPickedGroup,
  setCurrentWordIndex,
  setAnsweredWords,
  clearAnsweredWords,
  setCurrentCorrectAnswersSeries,
  setLastBestSeries,
} = sprintSlice.actions;

export default sprintSlice.reducer;