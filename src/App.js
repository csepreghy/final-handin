import React, {Component} from 'react';
import {RaisedButton, MuiThemeProvider} from 'material-ui';
import Home from './Home';
import About from './About';
import Partners from './Partners';
import Navbar from './Navbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {

  constructor(props) {
    super();

    this.state = {
      pageContent: "home",
      loggedIn: false
    }

    this.getContent = this.getContent.bind(this);
    this.redirect = this.redirect.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  redirect() {
    
  }

  handleNavClick(item) {
    this.setState({ pageContent: item });
  }

  getContent() {
    switch (this.state.pageContent) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "partners":
        return <Partners />
    }
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
            <Navbar handleNavClick={ this.handleNavClick } />
            { this.getContent() }
          </div>
        </MuiThemeProvider> 
    );
  }
}
export default App;
