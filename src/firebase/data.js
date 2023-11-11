// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQsSKTOqx5EtZ8BpXej7FHCXQg4XQRY4",
  authDomain: "efrain-e-commerce.firebaseapp.com",
  projectId: "efrain-e-commerce",
  storageBucket: "efrain-e-commerce.appspot.com",
  messagingSenderId: "201973683621",
  appId: "1:201973683621:web:35f7084452ef12542f844c",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
