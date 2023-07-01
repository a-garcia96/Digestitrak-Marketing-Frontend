import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth();

const getAuthState = (action) => {
  onAuthStateChanged(auth, (userObject) => {

    if (userObject) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user


      action({ ...userObject, isSignedIn: true });
    } else {
      // User is signed out
    }
  });
};

export { auth, getAuthState };
