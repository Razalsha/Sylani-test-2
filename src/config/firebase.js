import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLH9PBl4r3p-BbMO9B86__eKt01A-ffk8",
  authDomain: "rdtest-project.firebaseapp.com",
  projectId: "rdtest-project",
  storageBucket: "rdtest-project.firebasestorage.app",
  messagingSenderId: "198722895133",
  appId: "1:198722895133:web:4f374039c6f3f9dbbb35f4",
  //measurementId: "G-NHER0P8XZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);

export  default { db };