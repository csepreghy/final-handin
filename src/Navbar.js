import React, {Component} from 'react';

class Navbar extends Component {

  constructor(props) {
    super();

    this.getPartners = this.getPartners.bind(this);
    this.getAccounts = this.getAccounts.bind(this);
    this.getEvents = this.getEvents.bind(this);
    this.getSideAccounts = this.getSideAccounts.bind(this);
    this.getSideEvents = this.getSideEvents.bind(this);
    this.getSidePartners = this.getSidePartners.bind(this);
  }

  componentDidMount() {
    $(".button-collapse").sideNav();
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

  getSidePartners() {
    if (this.props.isAdmin === false) {
      return (
        <li onClick={ () => this.props.handleNavClick("partners") }><a className="waves-effect">Partners</a></li>
      )
    } else {
      return (
        <li onClick={ () => this.props.handleNavClick("adminPartners") }><a className="waves-effect">Partners</a></li>
      )
    }
  }

  getEvents() {
    if (this.props.isAdmin === false) {
      return (
        <li onClick={ () => this.props.handleNavClick("home") } ><a>Events</a></li>
      )
    } else {
      return (
        <li onClick={ () => this.props.handleNavClick("adminEvents") } ><a>Edit Events</a></li>
      )
    }
  }

  getSideEvents() {
    if (this.props.isAdmin === false) {
      return (
        <li onClick={ () => this.props.handleNavClick("home") } ><a className="waves-effect">Events</a></li>
      )
    } else {
      return (
        <li onClick={ () => this.props.handleNavClick("adminEvents") } ><a className="waves-effect">Edit Events</a></li>
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
        <li onClick={ () => this.props.handleNavClick("accounts") } ><a>Accounts</a></li>
      )
    }
  }

  getSideAccounts() {
    if (this.props.isAdmin === true) {
      return (
        <li onClick={ () => this.props.handleNavClick("accounts") } ><a className="waves-effect">Accounts</a></li>
      )
    }
  }

  render() {
    return (
      <div id="navbar">
        <ul id="slide-out" className="side-nav">
          { this.getSideEvents() }
          { this.getSidePartners() }
          { this.getSideAccounts() }
          <li onClick={ () => this.props.handleNavClick("about") }><a className="waves-effect">About us</a></li>
        </ul>
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
            <a data-activates="slide-out" className="button-collapse hide-on-large-only"><i className="material-icons">menu</i></a>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;