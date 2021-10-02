import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAToWFMlRjwiVfWrT62dmEr657bCVmQQ2E",
  authDomain: "e-library-18bfe.firebaseapp.com",
  projectId: "e-library-18bfe",
  storageBucket: "e-library-18bfe.appspot.com",
  messagingSenderId: "56444862346",
  appId: "1:56444862346:web:659945590503a703d51273"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();