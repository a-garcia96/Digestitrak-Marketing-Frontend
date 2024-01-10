import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { app } from "./firebase";
import nookies from "nookies";

const auth = getAuth();

const getAuthState = (action) => {
  onAuthStateChanged(auth, (userObject) => {
    if (userObject) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      // console.log(userObject.auth.currentUser.uid)
      action && action({ ...userObject, isSignedIn: true });

      nookies.set(undefined, "uid", userObject.auth.currentUser.uid, {
        path: "/",
      });
    } else {
      // User is signed out
      destroyCookie(null, "uid");
    }
  });
};

export { auth, getAuthState };
