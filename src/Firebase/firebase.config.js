// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyAY53_uRchnROG1eTxSR07b3lTrVdWwn-4",
  authDomain: "kh-sultana-kitchen-e1a86.firebaseapp.com",
  projectId: "kh-sultana-kitchen-e1a86",
  storageBucket: "kh-sultana-kitchen-e1a86.appspot.com",
  messagingSenderId: "759333832624",
  appId: "1:759333832624:web:874cea56a3a21f1de23875",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
