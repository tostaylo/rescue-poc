import React from 'react';
import { PropTypes } from 'prop-types';
import { TextField as MUTextField } from 'material-ui';
import { inputShape, metaShape } from './propTypes';

const TextField = ({
  fullWidth,
  input,
  label,
  max,
  meta: { touched, dirty, error },
  min,
  ...custom
}) => (
  <MUTextField
    {...custom}
    {...input}
    className={'text-field'}
    errorText={(dirty && error) || (touched && error)}
    floatingLabelText={label}
    fullWidth={fullWidth}
    hintText={label}
    max={max}
    min={min}
    onChange={(event, value) => {
      input.onChange(value);
    }}
  />
);

TextField.propTypes = {
  fullWidth: PropTypes.bool,
  input: inputShape.isRequired,
  label: PropTypes.element,
  max: PropTypes.number,
  meta: metaShape.isRequired,
  min: PropTypes.number
};

export default TextField;
