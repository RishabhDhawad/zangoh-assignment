import React from "react";
import Navbar from "./components/Navbar.jsx";

const Layout = ({ children }) => {
  return (
    <div className=" bg-[#FDE3D9] min-h-[100vh] max-w-[1440px] relative">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;