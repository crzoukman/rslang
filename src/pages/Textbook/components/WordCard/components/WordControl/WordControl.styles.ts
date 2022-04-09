import styled from 'styled-components';

export const StyledWordControl = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  font-family: 'Roboto-Regular';
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    &:hover {
      cursor: pointer;
    }

    &[disabled] {
      cursor: default;
    }
  }
`;