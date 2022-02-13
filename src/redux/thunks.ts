import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from 'model/IUser';
import {
  ICreateUserWord,
  IGetUserWords,
  ILoadingPageData,
  ISignIn,
} from './types';

// export const BASE_URL = 'https://zoukman-rslang.herokuapp.com';
export const BASE_URL = 'https://react-rslang-fgriff.herokuapp.com';

export const createUser = createAsyncThunk(
  'thunks/createUser',
  async ({ name, email, password }: IUser, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + '/users', {
        name,
        email,
        password,
      });

      return response.data;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue(
        'Не удалось создать нового пользователя! Попробуйте еще раз.'
      );
    }
  }
);

export const signIn = createAsyncThunk(
  'thunks/signIn',
  async ({ email, password }: ISignIn, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL + '/signin', {
        email,
        password,
      });

      return response.data;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue(
        'Не удалось войти в учётную запись! Попробуйте еще раз.'
      );
    }
  }
);

export const fetchWordsByGroup = createAsyncThunk(
  'thunks/fetchWordsByGroup',
  async (level: string, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/words?group=${level}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) console.error(e.message);
      return thunkAPI.rejectWithValue('Не удалось получить слова');
    }
  }
);

export const fetchWords = createAsyncThunk(
  'words/fetchWords',
  async (pageData: ILoadingPageData, thunkAPI) => {
    try {
      const response = await fetch(
        `${BASE_URL}/words?group=${pageData.savedGroupNumber - 1}&page=${
          pageData.savedPageNumber - 1
        }`
      );

      const data = await response.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить данные. Ошибка сервера'
      );
    }
  }
);

export const getUserWords = createAsyncThunk(
  'words/getUserWords',
  async (userData: IGetUserWords, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/users/${userData.userId}/aggregatedWords?filter={"$and":[{"userWord.difficulty":"difficult"}]}`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data[0].paginatedResults;
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить слова');
    }
  }
);

export const createUserWord = createAsyncThunk(
  'words/createUserWord',
  async (userWord: ICreateUserWord, thunkAPI) => {
    try {
      await axios.post(
        `${BASE_URL}/users/${userWord.userId}/words/${userWord.wordId}`,
        {
          difficulty: 'difficult',
        },
        {
          headers: {
            Authorization: `Bearer ${userWord.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось добавить слово');
    }
  }
);
