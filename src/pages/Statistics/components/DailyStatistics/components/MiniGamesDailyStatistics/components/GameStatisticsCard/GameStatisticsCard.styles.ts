import styled from 'styled-components';

export const StyledGameStatisticsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  padding-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #111827;
  max-width: 300px;
  border-radius: 10px;
  & h3 {
    text-align: center;
    font-size: 1.3rem;
    line-height: 2.5rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
  }
  & p {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    line-hight: 3rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    & p {
      line-hight: 2.5rem;
    }
  }
`;
