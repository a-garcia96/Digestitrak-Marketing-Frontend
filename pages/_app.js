import { useEffect, useState } from "react";
import "../styles/globals.css";
import AuthContext from "../contexts/AuthContext";
import { getAuthState } from "../firebase/firebaseAuth";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    getAuthState(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContext.Provider>
  );
}

export default MyApp;
