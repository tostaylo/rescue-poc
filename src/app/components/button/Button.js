import React, { PropTypes } from 'react';
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
  raised: PropTypes.boolean,
  ripple: PropTypes.boolean,
  disabled: PropTypes.boolean,
  colored: PropTypes.boolean,
  accent: PropTypes.boolean,
  label: PropTypes.string
};

export default Button;
