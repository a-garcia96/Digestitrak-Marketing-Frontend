// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt6xFLU5S31GGH4RLZBZUtcL6kUqcHpLc",
  authDomain: "gerd-tracker.firebaseapp.com",
  projectId: "gerd-tracker",
  storageBucket: "gerd-tracker.appspot.com",
  messagingSenderId: "736209604744",
  appId: "1:736209604744:web:4d030f04feb0f3e09ecf3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getPHDiary(db) {
  const col = collection(db, 'PHDiary')
  const diarySnapshot = await getDocs(col)
  const diaryList = diarySnapshot.docs.map(doc => doc.data())
  return diaryList
}

const auth = getAuth()
const handleSignIn = (e) => {
  e.preventDefault()

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(`Signed in: ${user}`)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message

      console.log(`${errorCode}: ${errorMessage}`)
    })
}


export { getPHDiary, handleSignIn }