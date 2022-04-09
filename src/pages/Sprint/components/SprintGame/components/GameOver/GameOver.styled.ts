import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const H1Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
 

  img {
    width: 60px;
  }

  h1 {
    font-size: 42px;
    font-weight: 500;
    cursor: default;
  }
`;

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 40px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
`;

export const WordWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 6px;

  img {
    height: 20px;
    cursor: pointer;
  
  }
  div {
    font-size: 18px;
  }

  span {
    color: coral;
    text-decoration: line-through;
  }
`;

export const CorrectWrapper = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px 20px;
  cursor: default;
  width: 60%;
  margin-bottom: 20px;
`;

export const H3CorrectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  img {
    height: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }
`;


export const WrongWrapper = styled.div`
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  padding: 10px 20px;
  cursor: default;
  width: 60%;
`;

export const H3WrongWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  img {
    height: 20px;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
  }
`;