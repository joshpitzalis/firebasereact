import firebase from 'firebase'
require('firebase/firestore')

var config = {
  apiKey: 'AIzaSyCvEW7J2QrOoO8Nk2TzN1fbhd_agdz0XQM',
  authDomain: 'fir-101-a1bae.firebaseapp.com',
  databaseURL: 'https://fir-101-a1bae.firebaseio.com',
  projectId: 'fir-101-a1bae',
  storageBucket: 'fir-101-a1bae.appspot.com',
  messagingSenderId: '665517189950'
}
firebase.initializeApp(config)

export const db = firebase.firestore()
