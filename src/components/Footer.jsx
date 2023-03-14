import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
      <p>Made with ❤️ by ADITYA SAINI</p>
    </footer>
  );
}
// Dynamic copyright year

export default Footer;
