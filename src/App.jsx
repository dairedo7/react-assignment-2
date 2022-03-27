import './index.css';
import React from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification.js';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleAddOperation = (evt) => {
    const { name } = evt.target;
    this.setState(prevState => {
      console.log({ [name]: prevState[name] + 1 })
      return { [name]: prevState[name] + 1}
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    let countPositiveFeedback = 0;
    const { good } = this.state;
    countPositiveFeedback = (good / this.countTotalFeedback() * 100);
    if (!isFinite(countPositiveFeedback)) {
      return 0;
    }

    return countPositiveFeedback.toFixed(0);
  }

  render() {
    const { state, handleAddOperation, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const { good, neutral, bad } = state;
    
    return (
      <>
      <div className="code__title">
        <a className="code__link" href="https://github.com/dairedo7/react-assignment-2">
          Project's original code
        </a>
      </div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleAddOperation} />
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
    )
  }

};

export default App;