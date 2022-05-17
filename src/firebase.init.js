// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKKTC05YIi7zKOGOLgLdYuUBik5KcHC8w",
  authDomain: "electra-warehouse-manage.firebaseapp.com",
  projectId: "electra-warehouse-manage",
  storageBucket: "electra-warehouse-manage.appspot.com",
  messagingSenderId: "952938607763",
  appId: "1:952938607763:web:fe4dada10f40f2b893c966",
  //   apiKey: process.env.API_KEY,
  //   authDomain: process.env.AUTH_DOMAIN,
  //   projectId: process.env.PROJECT_ID,
  //   storageBucket: process.env.STORAGE_BUCKET,
  //   messagingSenderId: process.env.MESSAGIN_SENDING_ID,
  //   appId: process.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
