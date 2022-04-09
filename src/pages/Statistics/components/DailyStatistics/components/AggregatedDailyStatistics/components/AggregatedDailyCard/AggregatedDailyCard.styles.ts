import styled from 'styled-components';

export const StyledAggregatedDailyCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & div {
    font-size: 2.5rem;
    font-weight: 700;
    color: #111827;
  }
  & p {
    color: #111827;
    font-size: 1.3rem;
  }
  @media (max-width: 420px) {
    margin-bottom: 20px;
  }
`;
