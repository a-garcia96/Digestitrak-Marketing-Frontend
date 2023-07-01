import React, { useContext } from "react";
import { auth } from "../../firebase/firebaseAuth";
import { signOut } from "firebase/auth";
import AuthContext from "../../contexts/AuthContext";
import { useRouter } from "next/router";

const Logout = () => {
  const { user, setUser } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({ ...user, isSignedIn: false });
        router.push('/')
      })
      .catch((error) => {
        alert(error);
      });
  };

  return <button className="bg-red-300 text-red-600 p-4 rounded-full" onClick={handleClick}>Logout</button>;
};

export default Logout;
