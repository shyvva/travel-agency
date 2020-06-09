import React from 'react';
import styles from './OrderOption.scss';
import ProtoTypes from 'prop-types';

const OptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input className={styles.input}
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)} />
  </div>
);

OptionText.propTypes = {
  currentValue: ProtoTypes.node,
  setOptionValue: ProtoTypes.func,
};

export default OptionText;
