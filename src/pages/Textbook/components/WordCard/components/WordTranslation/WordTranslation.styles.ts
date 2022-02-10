import styled from "styled-components";

export const StyledWordTranslation = styled.div`
display: flex;
align-items: center;

span:first-child,
span:nth-child(2) {
  margin-right: 10px;
}

button {
  &:hover {
    cursor: pointer;
  }
}
`;