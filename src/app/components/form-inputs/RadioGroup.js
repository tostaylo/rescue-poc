import React from 'react';
import { PropTypes } from 'prop-types';
import { RadioButtonGroup as MDLRadioButtonGroup } from 'material-ui/RadioButton';
import { inputShape } from './propTypes';

const RadioButtonGroup = ({ input, ...rest }) => (
  <MDLRadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

RadioButtonGroup.propTypes = {
  input: inputShape.isRequired,
  label: PropTypes.element
};

export default RadioButtonGroup;
