import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 650px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
