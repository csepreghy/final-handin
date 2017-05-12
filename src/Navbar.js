import React, {Component} from 'react';

class Navbar extends Component {

  constructor(props) {
    super();

    this.getPartners = this.getPartners.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getEvents = this.getEvents.bind(this);
  }

  getPartners() {
    if (this.props.isAdmin === false) {
      return (
        <li onClick={ () => this.props.handleNavClick("partners") }><a>Partners</a></li>
      )
    } else {
      return (
        <li onClick={ () => this.props.handleNavClick("adminPartners") }><a>Partners</a></li>
      )
    }
  }

  getEvents() {
    if (this.props.isAdmin === false) {
      return (
        <li onClick={ () => this.props.handleNavClick("home") }><a>Events</a></li>
      )
    } else {
      return (
        <li onClick={ () => this.props.handleNavClick("adminEvents") }><a>Edit Events</a></li>
      )
    }
  }

  getAdminNavElement() {
    if (this.props.isAdmin === true) {
      return (
        <span className="admin-panel-label">Admin panel</span>
      )
    }
  }

  getAccounts() {
    if (this.props.isAdmin === true) {
      return (
        <li onClick={ () => this.props.handleNavClick("accounts") }><a>Accounts</a></li>
      )
    }
  }

  render() {
    return (
      <div id="navbar">
        <nav>
          <div className="nav-wrapper">
            <div onClick={ () => this.props.handleNavClick("home") } className="brand-logo">Logo</div>
            { this.getAdminNavElement() }
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              { this.getEvents() }
              { this.getPartners() }
              { this.getAccounts() }
              <li onClick={ () => this.props.handleNavClick("about") }><a>About us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;