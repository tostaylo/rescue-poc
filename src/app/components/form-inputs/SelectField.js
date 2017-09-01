import React from 'react';
import PropTypes from 'prop-types';
import { intlShape } from 'react-intl';
import { SelectField as MUISelectField } from 'material-ui';
import { inputShape, metaShape } from './propTypes';

const SelectField = ({
  children,
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <MUISelectField
    {...custom}
    {...input}
    errorText={touched && error}
    floatingLabelText={label}
    onChange={(event, index, value) => input.onChange(value)}
  >
    {children}
  </MUISelectField>
);

SelectField.propTypes = {
  name: PropTypes.string,
  input: inputShape.isRequired,
  label: PropTypes.element,
  options: PropTypes.arrayOf(PropTypes.element),
  componentType: PropTypes.string,
  meta: metaShape,
  className: PropTypes.string,
  intl: intlShape.isRequired,
  formatValues: PropTypes.bool,
  children: PropTypes.element
};

export default SelectField;
