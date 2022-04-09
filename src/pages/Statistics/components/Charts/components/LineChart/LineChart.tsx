import { IStatistic } from 'model/IStatistic';
import { FC, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { getStatistic } from 'redux/thunks';
import { increaser } from '../../utils';

const borderWidth = 2;
const pointRadius = 5;
const pointHoverRadius = 10;

const LineChart: FC = () => {
  const { statisticData } = useTypedSelector(state => state.statistic);
  const dispatch = useTypedDispatch();
  const [labelsData, setLabelslData] = useState<string[]>([]);
  const [newWordsData, setNewWordsData] = useState<number[]>([]);
  const [dataSet, setDataSet] = useState<null | any>(null);
  const [optionsSet, setOptionsSet] = useState<null | any>(null);

  useEffect(() => {
    const authData = localStorage.getItem('authUserData-zm');
    if (authData) dispatch(getStatistic(JSON.parse(authData)));
  }, []);

  useEffect(() => {
    if (Object.keys(statisticData).length > 0) {
      const copyStat = statisticData as IStatistic;
      const dailyResults = copyStat.optional.dailyResults;
      const datesData = Object.keys(dailyResults).map(date => {
        const split = date.split('-');
        return [split[2], split[1], split[0]].join('-');
      });
      setLabelslData(datesData);

      const wordsData = [];
      for (const i in dailyResults) {
        wordsData.push(dailyResults[i].newWordsCounter)
      }
      setNewWordsData(wordsData);

      const dataSet = {
        labels: labelsData,
        datasets: [
          {
            data: increaser(newWordsData),
            label: 'Изучено слов к текущему моменту',
            backgroundColor: ['red', 'green', 'blue'],
            // borderColor: ['yellow'],
            // pointBackgroundColor: 'purple',
            fill: false,
            borderWidth,
            pointRadius,
            pointHoverRadius,
          },
        ],
      };
      setDataSet(dataSet);

      const optionsSet = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Ваш прогресс',
          },

        },
      };

      setOptionsSet(optionsSet);
    }
  }, [statisticData])


  return (
    <div>
      {dataSet && (
        <Line data={dataSet} options={optionsSet} />
      )}
    </div>
  );
};

export default LineChart;