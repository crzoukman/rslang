import styled from 'styled-components';

export const StyledWordImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 5px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;