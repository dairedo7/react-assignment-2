import './index.css';

import { useState } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/Feedback';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification.js';

export default function App() {
  const [good, setGoodStat] = useState(0);

  const [neutral, setNeutralStat] = useState(0);

  const [bad, setBadStat] = useState(0);

  const options = { good, neutral, bad };
  console.log(options);
  const handleAddOperation = evt => {
    const { name } = evt.target;
    switch (name) {
      case 'good':
        setGoodStat(good => good + 1);
        break;
      case 'neutral':
        setNeutralStat(neutral => neutral + 1);
        break;
      case 'bad':
        setBadStat(bad => bad + 1);
        break;
      default:
        throw new Error('error: wrong type of data');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback = 0;
    countPositiveFeedback = (good / countTotalFeedback()) * 100;
    if (!isFinite(countPositiveFeedback)) {
      return 0;
    }

    return countPositiveFeedback.toFixed(0);
  };

  return (
    <>
      <div className="code__title">
        <a
          className="code__link"
          href="https://github.com/dairedo7/react-assignment-2"
        >
          Project's original code
        </a>
      </div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleAddOperation}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <Notification message="No feedback given" />
        </Section>
      )}
    </>
  );
  // }
}
