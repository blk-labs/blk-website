import React, { Component } from 'react';

// Comps
import Terms from '../components/Terms';
import Footer from '../components/Footer';

class home extends Component {

  render() {
    
    return (
      <div>
        <Terms />
        <Footer />
      </div>
    );
  }
}

export default home;