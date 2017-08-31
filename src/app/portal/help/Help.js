import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Button, Footer, TextField } from 'app/components';

const validate = values => {
  const errors = {};
  const requiredFields = ['email', 'password'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = <FormattedMessage id={'form.required'} />;
    }
  });
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = <FormattedMessage id={'form.invalidEmail'} />;
  }
  return errors;
};

const helpForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <div className="login">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.help'} />
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={TextField}
            label={<FormattedMessage id={'helpForm.email'} />}
          />
        </div>
        <div>
          <Button
            raised
            disabled={pristine || submitting}
            label={<FormattedMessage id={'form.submit'} />}
          />
          <Button
            raised
            disabled={pristine || submitting}
            label={<FormattedMessage id={'form.reset'} />}
            onClick={reset}
          />
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

helpForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'LoginForm',
  validate
})(helpForm);
