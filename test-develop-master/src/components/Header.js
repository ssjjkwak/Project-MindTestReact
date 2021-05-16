import React from 'react';
import '../style/header+footer.css';
import '../index.css';

const Header = ({ handleMode }) => {
  return (
    <header id="header">
      <button className="logo head" onClick={handleMode}></button>
    </header>
  );
}

export default Header;