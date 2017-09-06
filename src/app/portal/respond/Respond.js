import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Footer } from 'app/components';
import firebase from 'root/firebase';

/*eslint-disable*/
class Respond extends Component {
  constructor(props) {
    super(props);
    this.state = { markers: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to markers in Firebase Database */
    const messagesRef = firebase
      .database()
      .ref('markers')
      .orderByKey()
      .limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when marker is added at Firebase Database */
      const marker = { text: snapshot.val(), id: snapshot.key };
      this.setState({ markers: [marker].concat(this.state.markers) });
    });
  }
  render() {
    return (
      <div className="respond">
        <div className="portal-content">
          <h1>
            <FormattedMessage id={'app.nav.respond'} />
          </h1>
          <ul>
            {/* Render the list of markers */
            this.state.markers.map(marker => (
              <li key={marker.id}>{marker.text}</li>
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
/*eslint-enable*/

export default Respond;
