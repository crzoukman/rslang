import styled from 'styled-components';

export const StyledCardsContainer = styled.div<{
  learnedWordCount: { diffCount: number; agg: number } | false;
}>`
  width: 100%;
  padding: 20px;
  background: ${({ learnedWordCount }) =>
    learnedWordCount &&
    learnedWordCount.agg === 20 &&
    learnedWordCount.diffCount < 20
      ? '#dff7df'
      : '#fff'};
  display: flex;
  gap: 15px;
  justify-content: space-around;
  flex-wrap: wrap;

  & .empty {
    font-family: 'Roboto-Bold';
    font-size: 36px;
  }

  @media (max-width: 660px) {
    padding: 20px 0;
  }
`;