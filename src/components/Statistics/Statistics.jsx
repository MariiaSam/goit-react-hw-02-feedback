import PropTypes from 'prop-types';
import { StatisticList, StatisticDescription } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
   
      <StatisticList>
        <li>
          <StatisticDescription>Good: {good}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Neutral: {neutral}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Bad: {bad}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Total: {total}</StatisticDescription>
        </li>
        <li>
          <StatisticDescription>Positive feedback:  {positivePercentage}%</StatisticDescription>
        </li>
      </StatisticList>)

};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };