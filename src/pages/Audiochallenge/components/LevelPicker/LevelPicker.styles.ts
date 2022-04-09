import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & h2 {
    color: #111827;
    text-align: center;
  }
`;

export const StyledButtonsRow = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  & div {
    cursor: pointer;
    text-transform: uppercase;
    color: rgba(255, 255, 255);
    background-color: rgba(37, 99, 235);
    border: 1px solid rgba(37, 99, 235);
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-weight: 700;
    transition: all 0.2s ease-out;
    &:hover {
      transform: scale(1.1);
      background-color: rgba(59, 130, 246);
      border: 1px solid rgba(59, 130, 246);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & div {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 0.7rem;
      padding: 0.3rem;
    }
  }

  @media (max-width: 540px) {
    flex-direction: column;
    width: 300px;
    & div {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 0.7rem;
      padding: 0.3rem;
    }
  }
`;
