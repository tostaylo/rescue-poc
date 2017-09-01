import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker as MUTimePicker } from 'material-ui';
import { inputShape } from './propTypes';

const TimePicker = ({ input, label, name, ...props }) => (
  <MUTimePicker
    {...input}
    {...props}
    autoOk
    className={'time-picker'}
    floatingLabelText={label}
    format="24hr"
    hintText={label}
    id={name}
    onChange={(event, value) => input.onChange(value)}
    value={input.value || null}
  />
);

TimePicker.propTypes = {
  input: inputShape.isRequired,
  label: PropTypes.element.isRequired,
  name: PropTypes.string
};

export default TimePicker;
