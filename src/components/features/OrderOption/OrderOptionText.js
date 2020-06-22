import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({placeholder, setOptionValue}) => (
  <input
    type='text'
    className={styles.inputMedium}
    placeholder={placeholder,'Your Contact Info'}
    onChange={event => setOptionValue(event.currentTarget.value)}
  />
);

OrderOptionText.propTypes = {
  placeholder: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
