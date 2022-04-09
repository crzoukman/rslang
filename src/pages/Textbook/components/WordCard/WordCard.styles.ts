import { IUserWord } from 'model/IUserWord';
import styled from 'styled-components';

export const StyledWordCard = styled.div<{ background?: IUserWord | undefined }>`
  width: 450px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  /* box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px; */
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${({ background }) =>
    background?.difficulty === 'difficult'
      ? '#ffa1a1'
      : background?.difficulty === "easy" &&
        background.optional.counter >= 3
        ? '#bef7be'
        // : '#dbdbdb'};
        : 'white'};

  @media (max-width: 475px) {
    width: 400px;
  }
`;