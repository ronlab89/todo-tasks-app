import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDay4XnSSM0ZuJ70lpYQX7MmBrduDM9GuY",
  authDomain: "todo-tasks-app-dca53.firebaseapp.com",
  projectId: "todo-tasks-app-dca53",
  storageBucket: "todo-tasks-app-dca53.appspot.com",
  messagingSenderId: "300543617478",
  appId: "1:300543617478:web:5e0d22e7e9da5c2f866ac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export { auth, provider };