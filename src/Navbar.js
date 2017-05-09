import React from 'react';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const Navbar = ({ handleNavClick }) => (
  <nav>
    <div className="nav-wrapper">
      <div onClick={ () => handleNavClick("home") } className="brand-logo">Logo</div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li onClick={ () => handleNavClick("partners") }><a>Partners</a></li>
        <li onClick={ () => handleNavClick("about") }><a>About us</a></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;