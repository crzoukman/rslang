import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;


export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 28px;
  }

  div {
    font-size: 36px;
    font-weight: 500;
    cursor: default;
  }
  
`;

export const HR = styled.div`
  width: 60%;
  height: 4px;
  background: orange;
  border-radius: 6px;
  margin: 40px 0;
`;