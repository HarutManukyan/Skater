import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjv7tUo7Ej4boNf3MhiyXeVTb0kFIoQ-g",
  authDomain: "rooftop-b8b96.firebaseapp.com",
  projectId: "rooftop-b8b96",
  storageBucket: "rooftop-b8b96.appspot.com",
  messagingSenderId: "709871964150",
  appId: "1:709871964150:web:275d43dd5265299a7201d7",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const skatesRef = collection(db, "skateboards");

export let skateboardsList = [];

onSnapshot(skatesRef, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    skateboardsList.push({ ...doc.data(), id: doc.id });
  });
});

const usersRef = collection(db, "users");

let users = [];

export function getUsers() {
  onSnapshot(usersRef, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
  });
}

export function addUser(userInfo) {
  const docRef = collection(db, "users");

  addDoc(docRef, userInfo);
}

export function addToCart(userId, userCart) {
  const docRef = doc(db, "users", userId);

  updateDoc(docRef, {
    cart: userCart,
  });
}

export function deleteFromCart(userId, userCart) {
  const docRef = doc(db, "users", userId);

  updateDoc(docRef, {
    cart: userCart,
  });
}

export { users };
