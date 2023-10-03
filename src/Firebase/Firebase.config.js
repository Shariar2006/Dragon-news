// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgBp2pf6LSplsyCjD_XUXwtLh0eLWwP0E",
  authDomain: "dragon-news-1fbe8.firebaseapp.com",
  projectId: "dragon-news-1fbe8",
  storageBucket: "dragon-news-1fbe8.appspot.com",
  messagingSenderId: "482688750151",
  appId: "1:482688750151:web:124454ff87172e5898d762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app