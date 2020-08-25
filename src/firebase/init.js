import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCm0T3OUSecRqJFHyct2l7F-ajT3avaudk",
  authDomain: "vue-chat-3c0e6.firebaseapp.com",
  databaseURL: "https://vue-chat-3c0e6.firebaseio.com",
  projectId: "vue-chat-3c0e6",
  storageBucket: "vue-chat-3c0e6.appspot.com",
  messagingSenderId: "786086129688",
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
