import styled from 'styled-components';

export const StyledSubtitle = styled.h2<{ mt: string }>`
  font-family: 'Roboto-Bold';
  font-size: 36px;
  text-align: center;
  margin-top: ${({ mt }) => mt};
`;
