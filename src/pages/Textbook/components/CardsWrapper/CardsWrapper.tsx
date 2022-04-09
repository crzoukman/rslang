import { CircularProgress, Pagination } from '@mui/material';
import { useEffect } from 'react';
import { changePageNumber, makeWordDifficult, makeWordLearned } from 'redux/features/textbookSlice/textBookSlice';
import { buildUserWord } from 'redux/features/textbookSlice/utils';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { createUserWord, deleteUserWord, getUserWords, updateCurrentWord } from 'redux/thunks';
import GameButtons from '../GameButtons';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';
import CardsContainer from './components';

const CardsWrapper = () => {
  const { error, status, words, isWordDeleted, mode, difficultWords } = useTypedSelector((state) => state.textbook);
  const dispatch = useTypedDispatch();

  const onPageChange = (page: number) => {
    localStorage.setItem('pageNumber-nsv', String(page));
    dispatch(changePageNumber({ pageNumber: page }));
  }

  const authUser = JSON.parse(localStorage.getItem('authUserData-zm')!);
  
  const makeDifficult = async (id: string) => {
    dispatch(makeWordDifficult({ id }));

    const word = difficultWords.find((df) => df._id === id);

    if (!word) {
      await dispatch(createUserWord({
        userId: authUser.userId,
        wordId: id,
        token: authUser.token,
        wordData: buildUserWord(id, words, 'difficult'),
      }));
  
      // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    } else {
      await dispatch(updateCurrentWord({
        userId: authUser.userId,
        wordId: id,
        token: authUser.token,
        wordData: buildUserWord(id, words, 'difficult'),
      }));

      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    }
  }

  const deleteWord = (id: string) => {
    dispatch(deleteUserWord({
      userId: authUser.userId,
      wordId: id,
      token: authUser.token,
    }));
  }

  const makeLearned = async (id: string) => {
    dispatch(makeWordLearned({ id }));

    const word = difficultWords.find((df) => df._id === id);

    if (!word) {  
      await dispatch(createUserWord({
        userId: authUser.userId,
        wordId: id,
        token: authUser.token,
        wordData: buildUserWord(id, words, 'easy'),
      }));
  
      // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    } else {
      await dispatch(updateCurrentWord({
        userId: authUser.userId,
        wordId: id,
        token: authUser.token,
        wordData: buildUserWord(id, words, 'easy'),
      }));
  
      // После создания нового слова, сразу обновляем массив сложных слов, чтобы, при переключении на словарь, оно уже было
      await dispatch(getUserWords({
        userId: authUser.userId,
        token: authUser.token,
      }));
    }
  }

  useEffect(() => {
    isWordDeleted &&
      dispatch(
        getUserWords({
          userId: authUser.userId,
          token: authUser.token,
        })
      );
  }, [isWordDeleted]);

  const audio = new Audio();

  const wordCards = words.map((w) => (
    <WordCard
      key={w.id || w._id}
      player={audio}
      word={w}
      makeDifficult={makeDifficult}
      deleteWord={deleteWord}
      makeLearned={makeLearned}
    />
  ));

  // When the page is loaded for the first time and Local Storage is empty
  const currentPageNumber = Number(localStorage.getItem('pageNumber-nsv')) || 1;

  const showPagination =
    status === 'resolved' && Boolean(words.length) && mode === 'textbook';

  const countLearnedWords = () => {
    const result = {diffCount: 0, agg: 0};

    words.forEach((w) => {
      if (w.userWord) {
        if (w.userWord.difficulty === 'difficult' || w.userWord.optional.counter >= 3) {
          if (w.userWord.difficulty === 'difficult') {
            result.diffCount += 1;
          }
  
          result.agg += 1;
        }
      }
  
      result.agg += 0;
    });

    return result;
  };

  const learnedWordCount = mode === 'textbook' && countLearnedWords();

  return (
    <StyledCardsWrapper>
      {status === 'pending' && <CircularProgress color='info' />}
      {error && <h2>{error}</h2>}
      <CardsContainer learnedWordCount={learnedWordCount}>
        {status === 'resolved' && (wordCards.length ? wordCards : <span className='empty'>{'Слов нет'}</span>)}
      </CardsContainer>
      {showPagination && (
        <Pagination
          sx={{ marginLeft: 'auto', marginRight: 'auto' }}
          color={learnedWordCount && (learnedWordCount.agg === 20 && learnedWordCount.diffCount < 20) ? 'secondary' : 'primary'}
          count={30}
          page={currentPageNumber}
          onChange={(_, page) => onPageChange(page)}
        />
      )}
      <GameButtons learnedWordCount={learnedWordCount} />
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
