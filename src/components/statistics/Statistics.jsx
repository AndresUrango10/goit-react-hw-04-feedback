import React from 'react';
import PropTypes from 'prop-types';
import { StatsContainer, StatParagraph } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatsContainer>
    <StatParagraph>Good: {good}</StatParagraph>
    <StatParagraph>Neutral: {neutral}</StatParagraph>
    <StatParagraph>Bad: {bad}</StatParagraph>
    <StatParagraph>Total: {total}</StatParagraph>
    <StatParagraph>Positive Feedback: {positivePercentage}%</StatParagraph>
  </StatsContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
