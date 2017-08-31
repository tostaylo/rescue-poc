import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Grid, Cell, Button } from 'react-mdl';
import Table from 'rc-table';
import 'rc-table/assets/index.css';
import { users } from 'app/test/mock';
import { TextField } from 'app/components';

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

const Users = ({ handleSubmit, pristine, submitting }) => {
  const columns = [
    { title: 'Username', dataIndex: 'username', key: 'a' },
    { title: 'Role', dataIndex: 'role', key: 'b' },
    {
      title: 'Edit',
      dataIndex: '',
      key: 'd',
      render() {
        return <a href="">Edit</a>;
      }
    }
  ];

  return (
    <div className="users">
      <div className="dashboard-content">
        <h1>
          <FormattedMessage id={'app.nav.users'} />
        </h1>
        <form onSubmit={handleSubmit}>
          <Grid>
            <Cell col={4}>
              <Field
                name="email"
                component={TextField}
                label={<FormattedMessage id={'addUserForm.email'} />}
              />
            </Cell>
            <Cell col={4}>
              <Field
                name="password"
                component={TextField}
                label={<FormattedMessage id={'addUserForm.password'} />}
              />
            </Cell>
            <Cell col={4}>
              <Button raised disabled={pristine || submitting}>
                <FormattedMessage id={'form.add'} />
              </Button>
            </Cell>
          </Grid>
        </form>
        <Table columns={columns} data={users} rowKey={record => record.id} />
      </div>
    </div>
  );
};

Users.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
};

export default reduxForm({
  form: 'AddUserForm',
  validate
})(Users);
