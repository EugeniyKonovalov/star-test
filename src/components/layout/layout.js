import React from "react";
import Header from "./header";
import classes from "styles/layout/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
