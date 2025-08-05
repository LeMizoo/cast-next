import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // 🔐 Ton config Firebase ici
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);