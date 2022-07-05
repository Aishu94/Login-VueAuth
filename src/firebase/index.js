
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCh76kWl9Lw_aAhAIa4Lpfp8To12Srvy28",
  authDomain: "vue-fire-auth-yt-1388a.firebaseapp.com",
  projectId: "vue-fire-auth-yt-1388a",
  storageBucket: "vue-fire-auth-yt-1388a.appspot.com",
  messagingSenderId: "684657049461",
  appId: "1:684657049461:web:9c2425d1a09e3ad9511d3c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }