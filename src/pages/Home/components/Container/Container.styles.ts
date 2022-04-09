import styled from 'styled-components';

export const StyledContainer = styled.div<{ mt: string }>`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: ${({ mt }) => mt};
`;
