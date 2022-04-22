import './index.css';
import React, { Component } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification.js';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddOperation = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let countPositiveFeedback = 0;
    countPositiveFeedback = (good / this.countTotalFeedback()) * 100;
    if (!isFinite(countPositiveFeedback)) {
      return 0;
    }

    return countPositiveFeedback.toFixed(0);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const {
      state,
      handleAddOperation,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
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
            options={Object.keys(state)}
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
  }
}
