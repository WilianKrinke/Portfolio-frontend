import React from "react";
import "./header.css"

const Header = ({ title }) => {
  return (
    <>
      <header className="header_class">{title}</header>
    </>
  );
};

export default Header;
