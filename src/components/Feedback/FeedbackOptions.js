import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback}>
    {options.map(option => (
      <button
        type="button"
        className={styles.feedback__btn}
        onClick={onLeaveFeedback}
        name={option}
        key={option}
      >
        {option[0].toLocaleUpperCase() + option.slice(1)}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
