import { Alert } from '@mui/material';
import styled from 'styled-components';

export const StyledDailyStatistics = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  & h2 {
    text-align: center;
    font-size: 32px;
    color: #111827;
    font-weight: 600;
    margin-bottom: 20px;
    @media (max-width: 420px) {
      max-width: 200px;
    }
  }
`;

export const StyledAlert = styled(Alert)`
  margin-bottom: 30px;
  @media (max-width: 420px) {
    width: 220px;
  }
`;
