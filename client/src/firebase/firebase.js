import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD-9rSXs3CN7VOOmwXlJK9m7fKF7BeoaZU",
    authDomain: "fir-login-b4815.firebaseapp.com",
    projectId: "fir-login-b4815",
    storageBucket: "fir-login-b4815.appspot.com",
    messagingSenderId: "622467790655",
    appId: "1:622467790655:web:2b8bdc3df781c4518cc58a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;