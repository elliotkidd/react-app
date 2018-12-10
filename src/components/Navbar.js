import React from "react";
import ReactDOM from "react-dom";
import Button from './Buttons';

const NavbarLink = ({ text, url }) => {
  return (
    <a className="top-bar__link" href="{url}">
      {text}
    </a>
  );
};



const Navbar = ({ title }) => {
  return (
    <nav className="top-bar">
      <a className="top-bar__brand" href="/">{title}</a>
      <div className="top-bar__links">
        <NavbarLink url={"#"} text={"Search"} />
        <NavbarLink url={"#"} text={"How it works"} />
        <NavbarLink url={"#"} text={"FAQs"} />
      </div>
      <div className="top-bar__account">
        <a className="top-bar__link btn btn--primary-outline" href="#" >Log in</a>
        <Button url={"#"} text={"Sign up"} />
      </div>
    </nav>
  );
};

export default Navbar;