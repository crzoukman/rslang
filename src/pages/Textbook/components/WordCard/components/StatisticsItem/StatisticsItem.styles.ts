import styled from "styled-components";

export const StyledStatisticsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:first-child {
    font-weight: bold;
  }
  
  & div:nth-child(2),
  & div:nth-child(3) {
    height: 20px;
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 10px;
    font-size: 14px;
  }
`;