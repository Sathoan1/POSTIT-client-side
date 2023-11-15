import React from "react";
import Navbar from "./Navbar/Navbar";
import Navbar2 from "./Navbar2/Navbar2";
import Footer from "./Footer/Footer";

const Layout = ({ children, show }) => {
  return (
    <div>
      {show ? <Navbar /> : <Navbar2 />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
