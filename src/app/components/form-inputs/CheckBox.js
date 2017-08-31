import React from 'react';
import { PropTypes } from 'prop-types';
import { Checkbox as MDLCheckbox } from 'material-ui/Checkbox';
import { inputShape } from './propTypes';

const Checkbox = ({ input, label }) => (
  <MDLCheckbox label={label} checked={!input.value} onCheck={input.onChange} />
);

Checkbox.propTypes = {
  input: inputShape.isRequired,
  label: PropTypes.element
};

export default Checkbox;
