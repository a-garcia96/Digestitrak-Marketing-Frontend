import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
  return (
    <>
      <Navigation />
      <main className="min-h-[calc(100vh-64px-466px)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;