import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-mdl';
import { Footer, TextField } from 'app/components';

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

const SignupForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <div className="signup">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.signup'} />
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={TextField}
            label={<FormattedMessage id={'loginForm.email'} />}
          />
        </div>
        <div>
          <Field
            name="password"
            type="password"
            component={TextField}
            label={<FormattedMessage id={'loginForm.password'} />}
          />
        </div>
        <div>
          <Button raised disabled={pristine || submitting}>
            <FormattedMessage id={'form.submit'} />
          </Button>
          <Button raised disabled={pristine || submitting} onClick={reset}>
            <FormattedMessage id={'form.reset'} />
          </Button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'SignupForm',
  validate
})(SignupForm);
