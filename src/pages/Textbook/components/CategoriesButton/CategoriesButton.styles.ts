import styled from 'styled-components';

export const StyledCategoriesButton = styled.div<{backgroundColor: string}>`
  height: 50px;
  background-color: ${props => props.backgroundColor};

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    all: unset;
    width: 100%;
    height: 100%;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
  }
`;