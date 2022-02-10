import { CircularProgress, Pagination } from '@mui/material';
import { FC } from 'react';import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import WordCard from '../WordCard';
import { StyledCardsWrapper } from './CardsWrapper.styles';

const CardsWrapper: FC = () => {
  const { error, status, words } = useTypedSelector((state) => state.textbook);

  const audio = new Audio();

  const wordCards = words.map((w) => <WordCard key={w.id} player={audio} word={w} />);

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
          page={1}
        />
      )}
    </StyledCardsWrapper>
  );
};

export default CardsWrapper;
