import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBv2IXqqyv6Fwt8svWlCYrECOeiGObqkzI',
  authDomain: 'rescue-poc-c73e2.firebaseapp.com',
  databaseURL: 'https://rescue-poc-c73e2.firebaseio.com',
  projectId: 'rescue-poc-c73e2',
  storageBucket: 'rescue-poc-c73e2.appspot.com',
  messagingSenderId: '459170950792'
};

firebase.initializeApp(config);

export default firebase;
