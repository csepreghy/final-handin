import React, {Component} from 'react';
import {RaisedButton, MuiThemeProvider} from 'material-ui';
import Home from './Home';
import About from './About';
import Partners from './Partners';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



class App extends Component {

  constructor(props) {
    super();

    this.state={
      pageContent: "home"
    }

    this.getContent = this.getContent.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.setState({pageContent: "about"})
  }

  getContent() {
    if (this.state.pageContent === "home"){
      return (
        <Home />
      )
    }else if(this.state.pageContent === "about"){
      return (
        <About />
      )
    }else if(this.state.pageContent === "partners"){
      return (
        <Home />
      )
    }
  }

  render() {
    return (
        <MuiThemeProvider>
          <div>
            { this.getContent() }
            <RaisedButton onClick={this.redirect} label="Primary" />
          </div>
        </MuiThemeProvider> 
    );
  }
}
export default App;

//