// import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBM21jZQyox6vOKXRFj8lEVRslkZmHHSHI",
	authDomain: "uber-eats-clone-hsjaehun-ec53b.firebaseapp.com",
	projectId: "uber-eats-clone-hsjaehun-ec53b",
	storageBucket: "uber-eats-clone-hsjaehun-ec53b.appspot.com",
	messagingSenderId: "554209946564",
	appId: "1:554209946564:web:6c17d4fbc578f76c465291",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
