// Import the functions you need from the SDKs you need
import { addDoc, collection, getFirestore } from "firebase/firestore";import { initializeApp } from "firebase/app";
import { productos } from "../components/data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSw3nBl4uedQkfG08m8aLeUeiUjbXiYUw",
  authDomain: "frontend-4836d.firebaseapp.com",
  projectId: "frontend-4836d",
  storageBucket: "frontend-4836d.appspot.com",
  messagingSenderId: "343776286834",
  appId: "1:343776286834:web:0ab83cceab132ad2378aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


/*productos.forEach((prod) => {
    addDoc(collection(db, "productos"), prod)
        .then((data) => console.log(`El producto ${data.id} se subio`))
        .catch((error) => console.log(error));

    })*/
