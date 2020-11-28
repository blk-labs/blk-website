import React, { Component } from 'react';

// Comps
import AboutTop from '../components/about/AboutTop';
import AboutTeam from '../components/about/AboutTeam';
import AboutText from '../components/about/AboutText';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

window.scrollTo(0, 0);

class about extends Component {

  render() {

    return (
      <div>
        <AboutTop />
        <AboutText />
        <AboutTeam />
        <Bottom />
        <Footer />
      </div>
    );
  }
}

export default about;