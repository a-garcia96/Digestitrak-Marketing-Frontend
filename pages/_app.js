import { useEffect, useState } from "react";
import "../styles/globals.css";
import AuthContext from "../contexts/AuthContext";
import { getAuthState } from "../firebase/firebaseAuth";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getAuthState(setUser)
  })

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
