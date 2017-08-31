import React, { PropTypes } from 'react';
import { DatePicker as MUDatePicker } from 'material-ui';
import { inputShape } from './propTypes';

const DatePicker = ({ input, label, minDate, ...props }) => (
  <MUDatePicker
    {...input}
    {...props}
    autoOk
    className={'date-picker'}
    container="dialog"
    floatingLabelText={label}
    hintText={label}
    minDate={minDate}
    onChange={(event, value) => input.onChange(value)}
    value={input.value || null}
  />
);

DatePicker.propTypes = {
  input: inputShape.isRequired,
  label: PropTypes.element,
  minDate: PropTypes.objectOf(Date)
};

export default DatePicker;
