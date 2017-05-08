import React from 'react';
import { AppBar, IconButton, FlatButton } from 'material-ui';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const Navbar = ({ handleNavClick }) => (
  <AppBar
    title={<span>Super Event Organizer</span>}
    iconElementLeft={ <div onClick={ () => handleNavClick("home") }>Logo</div> }
    iconElementRight={
      <div>
        <FlatButton label="About" onClick={ () => handleNavClick("about") } />
        <FlatButton label="Partners" onClick={ () => handleNavClick("partners") } />
      </div>
      }
  />
);

export default Navbar;