import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 350px;
  margin: 0 auto;
  margin-bottom: 30px;
  @media (max-width: 420px) {
    flex-direction: column;
    margin-bottom: 20px;
    width: 320px;
  }
`;
