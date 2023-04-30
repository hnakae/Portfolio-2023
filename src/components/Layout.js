import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`text-dark dark:text-light w-full h-full  z-0 bg-light dark:bg-dark  ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
