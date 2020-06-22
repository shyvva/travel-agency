import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';
import { promoPrice } from '../../../utils/promoPrice';
import settings from '../../../data/settings.js';

const OrderSummary = props => (
  <div className={styles.component}>
    <h2 className={styles.discount}>Price From: {formatPrice(promoPrice(calculateTotal(props.tripCost, props.options), settings.discount))}</h2>
    <h2 className={styles.regular}>Standard Price: <strong>{formatPrice(calculateTotal(props.tripCost, props.options))}</strong></h2>
  </div>
);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
