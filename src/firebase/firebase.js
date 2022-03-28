import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3sh301X553qGi_SvU53m7i_yYRj_t4kY",
    authDomain: "powermail-14b48.firebaseapp.com",
    projectId: "powermail-14b48",
    storageBucket: "powermail-14b48.appspot.com",
    messagingSenderId: "203480468237",
    appId: "1:203480468237:web:8696ae587aa7e7f24e7e44",
    measurementId: "G-1MD3DNQEDN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export {db};