import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span><b>Contact</b></span>
      <span><b>About</b></span>
      <span><b>Terms of service</b></span>
      <span><b>Privacy</b></span>
      {/* <span>
        Made with ♥️ and <b>React.js</b>. */}
      {/* </span> */}
    </footer>
  );
};


 
export default Footer;
