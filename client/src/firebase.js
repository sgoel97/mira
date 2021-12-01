import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsVAJNv0bhAzJo-BHo-yuIOQyr-od8r40",
  authDomain: "mira-web-app.firebaseapp.com",
  projectId: "mira-web-app",
  storageBucket: "mira-web-app.appspot.com",
  messagingSenderId: "652618947268",
  appId: "1:652618947268:web:36cecbb8373580ca0a4791",
  measurementId: "G-3DV0S2LLD2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log({ credential, token, user });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log({ errorCode, errorMessage, email, credential });
    });
};

const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
  console.log("logout");
};

export { signInWithGoogle, sendPasswordResetEmail, logout };

export default firebaseConfig;
