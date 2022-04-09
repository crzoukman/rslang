import styled from "styled-components";

export const StyledWordTranslation = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;

  span:first-child,
  span:nth-child(2) {
    margin-right: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    all: unset;
    
    &:hover {
      cursor: pointer;
    }
  }
`;