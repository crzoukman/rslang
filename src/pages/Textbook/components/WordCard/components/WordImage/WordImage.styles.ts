import styled from 'styled-components';

export const StyledWordImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;