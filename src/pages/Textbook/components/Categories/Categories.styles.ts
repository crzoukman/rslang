import styled from 'styled-components';

export const StyledCategories = styled.div`
  width: 150px;
  margin-top: 20px;
  background-color: #fff;

  @media (max-width: 615px) {
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
  }
`;