import { FC } from "react";
import { StyledAggregatedDailyCard } from './AggregatedDailyCard.styles';
import { IAggregatedDailyCardProps } from './types';

const AggregatedDailyCard: FC<IAggregatedDailyCardProps> = ({ value, text }) => {
  return (
    <StyledAggregatedDailyCard>
      <div>{value}</div>
      <p>{text}</p>
    </StyledAggregatedDailyCard>
  );
};

export default AggregatedDailyCard;