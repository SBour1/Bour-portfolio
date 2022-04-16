import React from "react";
import profile from "../images/profpic.jpg"

const styles = {
    textAlign: 'center'
}

function Header() {
  return (
    <header className="header" style={styles}>
      <h1>Steve Bour's Portfolio</h1>
      <img src={profile} alt="Profile Pic"/>
    </header>
  );
}

export default Header;
