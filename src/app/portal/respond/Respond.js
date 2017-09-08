import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Footer } from 'app/components';
import firebase from 'root/firebase';
import { Gmaps, Marker } from 'react-gmaps';

const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const params = { v: '3.exp', key: 'AIzaSyCOoCxw1OaPsR_tmKo6H7Y_pgkr-6jqqhE' };

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

      const marker = snapshot.val();
      console.log(marker);
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
          <Gmaps
            width={'800px'}
            height={'600px'}
            lat={coords.lat}
            lng={coords.lng}
            zoom={12}
            loadingMessage={'Be happy'}
            params={params}
            onMapCreated={this.onMapCreated}
          >
            {/* Render the list of markers */
            this.state.markers.map(marker => (
              <Marker
                key={marker.id}
                lat={marker.latitude}
                lng={marker.longitude}
                draggable={true}
                onDragEnd={this.onDragEnd}
              />
            ))}
          </Gmaps>
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
