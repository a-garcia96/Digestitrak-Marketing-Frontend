import React, { useContext, useEffect } from "react";
import Login from "../../components/Login/Login";
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
      <Login type={"login"} />
    </>
  );
};

export default Index;
