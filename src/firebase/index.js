import firebase from 'firebase/app'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDQK7a5GxA7G1y2iIKTjyB1Cwp7LJ7ESLw",
    authDomain: "users-photo-storage.firebaseapp.com",
    databaseURL: "https://users-photo-storage.firebaseio.com",
    projectId: "users-photo-storage",
    storageBucket: "users-photo-storage.appspot.com",
    messagingSenderId: "483045513997",
    appId: "1:483045513997:web:c6a22852f85584ce602e44"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}