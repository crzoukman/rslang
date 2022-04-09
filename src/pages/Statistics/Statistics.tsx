import { FC } from "react";
import Charts from "./components/Charts";
import DailyStatistics from './components/DailyStatistics';
import { Wrapper } from "./Statistics.styles";
import { Divider } from '@mui/material';
import Footer from "components/Footer";

const Statistics: FC = () => {
  return (
    <Wrapper>
      <DailyStatistics />
      <Divider />
      <Charts />
      <Footer />
    </Wrapper>
  );
};

export default Statistics;
