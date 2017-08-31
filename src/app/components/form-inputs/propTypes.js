import { PropTypes } from 'react';

export const inputShape = PropTypes.shape({
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired
});

export const metaShape = PropTypes.shape({
  dirty: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  touched: PropTypes.bool.isRequired
});
