import React from 'react';
import styles from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={styles.feedback}>
    <h2 className={styles.title}>{title}</h2>
    {children}TG
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
