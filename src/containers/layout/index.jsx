import React from "react";
import Header from "../../components/header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="main-content">{children}</section>
    </>
  );
};

export default Layout;
