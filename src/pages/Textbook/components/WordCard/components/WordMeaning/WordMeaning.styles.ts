import styled from 'styled-components';

export const StyledWordMeaning = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  span {
    margin-top: 10px;
    font-family: 'Roboto-Regular';
    font-weight: bold;
  }

  p {
    font-family: 'Roboto-Regular';
    font-size: 16px;

    i {
      font-style: italic;
    }

    b {
      font-weight: bold;
    }

    &:nth-child(2),
    &:nth-child(5) {
      margin-top: 5px;
    }

    &:nth-child(3),
    &:nth-child(6) {
      padding-bottom: 5px;
      margin-top: 5px;
      border-bottom: 1px solid #c7c7c7;
      font-size: 14px;
    }
  }
`;