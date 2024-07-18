import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxrmpnmVshyR51N5SVpfQiLDvz9ho2drc",
  authDomain: "boiler-plate-a3122.firebaseapp.com",
  projectId: "boiler-plate-a3122",
  storageBucket: "boiler-plate-a3122.appspot.com",
  messagingSenderId: "679444156803",
  appId: "1:679444156803:web:bb6d3d65049e6035e2a6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export{app,auth}