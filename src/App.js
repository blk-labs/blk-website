import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import appTheme from './theme'

// Component 
import Navbar from './components/Navbar';
import ScrollTop from './components/ScrollTop'
import Title from './components/Title'

// Pages
import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Terms from './pages/terms';
import Default from './pages/404';

const theme = createMuiTheme(appTheme);

class App extends Component {
  render() {

    return (
      <MuiThemeProvider theme={theme}>
          <Router>
            <ScrollTop />
            <div className="container">
              <Navbar />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Title home={true}>
                      <Home {...props} />
                    </Title>
                  )}
                />
                <Route
                  path="/about"
                  render={(props) => (
                    <Title title="About Us">
                      <About {...props} />
                    </Title>
                  )}
                />
                <Route
                  path="/services"
                  render={(props) => (
                    <Title title="Services">
                      <Services {...props} />
                    </Title>
                  )}
                />
                <Route
                  path="/contact"
                  render={(props) => (
                    <Title title="Contact">
                      <Contact {...props} />
                    </Title>
                  )}
                />
                <Route
                  path="/terms"
                  render={(props) => (
                    <Title title="Terms & Conditions">
                      <Terms {...props} />
                    </Title>
                  )}
                />
                <Route component={Default} />
              </Switch>
            </div>
          </Router>
      </MuiThemeProvider>
    );
  }
}


export default App;
