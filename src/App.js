import React, {Component} from 'react';
import Home from './Home';
import About from './About';
import Partners from './Partners';
import Navbar from './Navbar';
import Login from './Login';
import PreLoader from './PreLoader';
import AdminEvents from './AdminEvents';

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      pageContent: "home",
      admin: false
    }

    this.getContent = this.getContent.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.toggleAdmin = this.toggleAdmin.bind(this);
    this.getAdminLabel = this.getAdminLabel.bind(this);
    this.loginLoading = this.loginLoading.bind(this);
  }

  handleNavClick(item) {
    if (item === "home") {
      window.location.replace('/');
    } else {
      this.setState({ pageContent: item });
    }
  }

  getContent() {
    console.log('getcontent');
    switch (this.state.pageContent) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "partners":
        return <Partners />
      case "login":
        return <Login loginLoading={ this.loginLoading }/>
      case "loginLoading":
        return <PreLoader />
      case "adminEvents":
        return <AdminEvents />
    }
  }

  loginLoading() {
    console.log('loginloading');
    this.setState({ pageContent: "loginLoading" });

    setTimeout(() => {
      this.setState({ pageContent: "adminEvents" });
    }, 300);
  }

  toggleAdmin() {
    if (this.state.admin === false) {
       this.setState({ pageContent: "login", admin: true });
    } else if (this.state.admin === true) {
       this.setState({ admin: false });
       window.location.replace('/');
    }
  }

  getAdminLabel() {
    console.log('getAdminlabel');
    if (this.state.admin === false) {
      return "admin";
    } else {
      return "user";
    }
  }

  render() {
    return (
      <div>
        <Navbar handleNavClick={ this.handleNavClick } />
        { this.getContent() }
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">Very proud bragging lines from the developer of the greatest event website with the greatest website.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2017 Copyright Text
            <button className="waves-effect waves-light btn admin-button" onClick={ this.toggleAdmin }>change to { this.getAdminLabel() }</button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
