import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Button } from 'react-mdl';
import { Footer, TextField, normalizePhone } from 'app/components';

const validate = values => {
  const errors = {};
  const requiredFields = ['name', 'email', 'phone', 'location', 'message'];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = <FormattedMessage id={'form.required'} />;
    }
  });
  if (values.name && !/^[A-Za-z]{1,2}$/i.test(values.name)) {
    errors.name = <FormattedMessage id={'form.numbersOnly'} />;
  }
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = <FormattedMessage id={'form.invalidEmail'} />;
  }
  if (values.location && !/^[A-Za-z]{1,2}$/i.test(values.location)) {
    errors.location = <FormattedMessage id={'form.numersOnly'} />;
  }
  return errors;
};

const ContactForm = ({ handleSubmit, pristine, reset, submitting }) => (
  <div className="contact">
    <div className="portal-content">
      <h1>
        <FormattedMessage id={'app.nav.contact'} />
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="name"
            component={TextField}
            label={<FormattedMessage id={'contactForm.name'} />}
            min="2"
            max="50"
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextField}
            label={<FormattedMessage id={'contactForm.email'} />}
            min="2"
            max="100"
          />
        </div>
        <div>
          <Field
            name="phone"
            component={TextField}
            normalize={normalizePhone}
            label={<FormattedMessage id={'contactForm.phone'} />}
          />
        </div>
        <div>
          <Field
            name="location"
            component={TextField}
            label={<FormattedMessage id={'contactForm.location'} />}
            min="2"
            max="50"
          />
        </div>
        <div>
          <Field
            name="message"
            component={TextField}
            label={<FormattedMessage id={'contactForm.message'} />}
            multiLine
            rows={4}
            min="10"
            max="140"
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

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'ContactForm',
  validate
})(ContactForm);
