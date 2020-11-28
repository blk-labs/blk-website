import React, { Component } from 'react';

// Comps
import ServicesTop from '../components/services/ServicesTop';
import ServicesWork from '../components/services/ServicesWork';
import ServicesValue from '../components/services/ServicesValue';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

class about extends Component {

  render() {

    return (
      <div>
        <ServicesTop />
        <ServicesWork />
        <ServicesValue />
        <Bottom />
        <Footer />
      </div>
    );
  }
}

export default about;