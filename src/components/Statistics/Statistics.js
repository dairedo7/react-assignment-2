import React from "react";
import styles from './Statistics.module.css';

import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
    <ul className={styles.statistics}>
        <li className={styles.statistics__item}>
            Good:
            <span className={styles.statistics__number}>{good}</span>
        </li>
        <li className={styles.statistics__item}>
            Neutral:
            <span className={styles.statistics__number}>{neutral}</span>
        </li>
        <li className={styles.statistics__item}>
            Bad:
            <span className={styles.statistics__number}>{bad}</span>
        </li>
        <li className={styles.statistics__item}>
            Total:
            <span className={styles.statistics__number}>{total}</span>
        </li>
        <li className={styles.statistics__item}>
            Positive Feedback:
            <span className={styles.statistics__number}>{positiveFeedback}%</span>
        </li>
    </ul>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Statistics;