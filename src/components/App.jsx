import React, { useState } from 'react';
import FeedbackOptions from './feedbackptions/FeedbackOptions';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';
import { ContainerApp } from './App.styled';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const leaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100) || 0;

  return (
    <ContainerApp>
      <Section title="Please leave feedback 👇">
        <FeedbackOptions
          options={{ good: 'Good', neutral: 'Neutral', bad: 'Bad' }}
          leaveFeedback={leaveFeedback}
        />
      </Section>

      <Section title="Statistics 📈">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback 😁" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </ContainerApp>
  );
};

export default App;
