import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ProtoTypes from 'prop-types';

class OptionDate extends React.Component {

  static propTypes = {
    currentValue: ProtoTypes.any,
    setOptionValue: ProtoTypes.func,
  }

  render() {
    const { setOptionValue, currentValue } = this.props;

    return (
      <div>
        <DatePicker
          placeholderText="Click to select a date"
          todayButton="Today"
          selected={currentValue}
          onChange={setOptionValue}
          showMonthDropdown
          showYearDropdow
        />
      </div>
    );
  }
}

export default OptionDate;
