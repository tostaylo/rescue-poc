import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { FormattedMessage } from 'react-intl';
import { Footer } from 'app/components';
import firebase from 'root/firebase';

/*eslint-disable*/
class HelpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] }; // <- set up react state
  }
  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the marker to Firebase */
    firebase
      .database()
      .ref('markers')
      .push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }
  render() {
    return (
      <div className="help">
        <div className="portal-content">
          <h1>
            <FormattedMessage id={'app.nav.help'} />
          </h1>
          <form onSubmit={this.addMessage.bind(this)}>
            <input type="text" ref={el => (this.inputEl = el)} />
            <input type="submit" />
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

HelpForm = reduxForm({
  form: 'HelpForm',
})(HelpForm);
/*eslint-enable*/
export default HelpForm;
