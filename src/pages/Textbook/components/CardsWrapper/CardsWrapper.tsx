import { CircularProgress, Pagination } from '@mui/material';
import { FC } from 'react';import { changePageNumber } from 'redux/features/textbookSlice/textBookSlice';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';

const CardsWrapper: FC = () => {
  const { error, status, words } = useTypedSelector((state) => state.textbook);

  const dispatch = useTypedDispatch();

  const onPageChange = (page: number) => {
    localStorage.setItem('pageNumber-nsv', String(page));
    dispatch(changePageNumber({ pageNumber: page }));
  }

  const audio = new Audio();

  const wordCards = words.map((w) => <WordCard key={w.id || w._id} player={audio} word={w} />);

  // When the page is loaded for the first time and Local Storage is empty
  const currentPageNumber = Number(localStorage.getItem('pageNumber-nsv')) || 1;

  return (
    <StyledCardsWrapper>
      {status === "pending" && <CircularProgress color="info" />}
      {error && <h2>{error}</h2>}
      {status === "resolved" && wordCards}
      {status === "resolved" && (
        <Pagination
          sx={{ marginLeft: "auto", marginRight: "auto" }}
          color="primary"
          count={30}
          page={currentPageNumber}
          onChange={(_, page) => onPageChange(page)}
        />
      )}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
