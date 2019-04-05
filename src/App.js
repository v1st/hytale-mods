import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Routes from './Components/Router/Routes';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';

// Animate on scroll
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css'; 
AOS.init();
// Animate on scroll

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar/>
            <Routes />
          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
