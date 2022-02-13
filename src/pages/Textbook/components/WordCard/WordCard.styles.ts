import styled from 'styled-components';

export const StyledWordCard = styled.div<{background?: string}>`
  width: 100%;
  padding: 30px 20px;
  margin-bottom: 15px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 5px;
  display: flex;
  row-gap: 15px;
  background-color: ${(props) => props.background ? 'tomato' : '#d7d7d7'};
`;