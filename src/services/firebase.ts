import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCp5gLXjF8RJkJgVhZFwr7adJKAJibMBeo",
  authDomain: "your-translator-application.firebaseapp.com",
  projectId: "your-translator-application",
  storageBucket: "your-translator-application.appspot.com",
  messagingSenderId: "529649784485",
  appId: "1:529649784485:web:7bc09f9d192177e7d01f4c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);