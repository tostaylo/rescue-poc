import React from 'react';
import PropTypes from 'prop-types';
import { Button as MDLButton } from 'react-mdl';

const Button = ({ raised, ripple, disabled, colored, accent, label }) => (
  <MDLButton
    raised={raised}
    ripple={ripple}
    disabled={disabled}
    colored={colored}
    accent={accent}
  >
    {label}
  </MDLButton>
);

Button.propTypes = {
  raised: PropTypes.bool,
  ripple: PropTypes.bool,
  disabled: PropTypes.bool,
  colored: PropTypes.bool,
  accent: PropTypes.bool,
  label: PropTypes.shape({
    label: PropTypes.string
  })
};

export default Button;
