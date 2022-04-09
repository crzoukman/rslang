import { FC } from 'react';
import { StyledStatisticsItem } from './StatisticsItem.styles';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import DoneSharpIcon from '@mui/icons-material/DoneSharp';
import { IStatisticsItemProps } from './types';

const StatisticsItem: FC<IStatisticsItemProps> = ({ children, statistics }) => {
  return (
    <StyledStatisticsItem>
      <div>{children}</div>
      <div>
        <DoneSharpIcon style={{fontSize: 'large'}} /><span>{statistics ? statistics.rightCounter : 0}</span>
      </div>
      <div>
        <CloseSharpIcon style={{fontSize: 'large'}} /><span>{statistics ? statistics.wrongCounter : 0}</span>
      </div>
    </StyledStatisticsItem>
  );
};

export default StatisticsItem;