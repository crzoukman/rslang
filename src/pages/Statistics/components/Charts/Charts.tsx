import { FC } from "react";
import { ChartsWrapper, Wrapper } from "./Charts.styled";
import { Chart, registerables } from 'chart.js';
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { Alert, AlertTitle } from "@mui/material";
import { useTypedSelector } from "redux/hooks";
Chart.register(...registerables);

const Charts: FC = () => {
  const { authUserData } = useTypedSelector(state => state.auth);

  return (
    <Wrapper>
      <h2>Статистика за всё время</h2>
      {authUserData
        ? (
          <ChartsWrapper>
            <LineChart />
            <BarChart />
          </ChartsWrapper>)
        : (
          <Alert severity="info">
            <AlertTitle>Внимание!</AlertTitle>
            Статистика доступна только для зарегистрированных пользователей.
          </Alert>
        )
      }

    </Wrapper>
  )
};

export default Charts;