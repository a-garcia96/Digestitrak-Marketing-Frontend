import React, { useEffect } from "react";
import Login from "../../components/Login/Login";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import { useRouter } from "next/router";

const Index = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user.isSignedIn) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <Login type={"new account"} />
    </>
  );
};

export default Index;
