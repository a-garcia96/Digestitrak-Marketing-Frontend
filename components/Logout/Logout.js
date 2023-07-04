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
        router.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <button
      className="rounded-md bg-gray-200 px-5 py-2.5 text-sm font-medium text-teal-600"
      onClick={handleClick}
    >
      Logout
    </button>
  );
};

export default Logout;
