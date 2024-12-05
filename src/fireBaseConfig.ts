import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3v311-YobHxjPgnkcJGBrROfzMSVeSLE",
  authDomain: "authtest-4c35b.firebaseapp.com",
  projectId: "authtest-4c35b",
  storageBucket: "authtest-4c35b.firebasestorage.app",
  messagingSenderId: "541659578257",
  appId: "1:541659578257:web:7429c759e9acf096bca430",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
