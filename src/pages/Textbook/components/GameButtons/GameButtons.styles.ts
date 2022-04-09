import styled from 'styled-components';

export const StyledWrapper = styled.div<{ learnedWordCount: {diffCount: number, agg: number} | false }>`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-self: center;
  pointer-events: ${({ learnedWordCount }) => learnedWordCount && (learnedWordCount.agg === 20 && learnedWordCount.diffCount < 20) ? 'none' : 'auto'};
  margin-top: 20px;

  @media (max-width: 615px) {
    margin-left: 0;
  }
  
  @media (max-width: 475px) {
    width: 400px;
  }
`;

export const GameButton = styled.div<{ img: string }>`
  width: 200px;
  height: 250px;
  border-radius: 5px;
  padding-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: 'Roboto-Bold';
  font-size: 24px;
  text-align: center;
  background-image: ${({ img }) => `url('${img}')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
`;