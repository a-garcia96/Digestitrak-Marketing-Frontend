import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";
import { useEffect } from "react";

const auth = getAuth()

const getAuthState = (action) => {
  onAuthStateChanged(auth, (userObject) => {
    if (userObject) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      action({...userObject, isSignedIn: true})
      console.log('signed in')
    } else {
      // User is signed out
      console.log('signed out')
    }
  });
}


export { auth, getAuthState }