import React from 'react';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

import './App.css';

import Nav from './components/nav';
import Header from './components/header';
import Works from './components/works';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

const TRACKING_ID = "G-M1X9KV13QY";
ReactGA.initialize(TRACKING_ID);

function App() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);

    return (
        <React.StrictMode>
            <div className='bg'></div>
            <Nav />
            <Header />
            <Works />
            <About />
            <Contact />
            <Footer />
        </React.StrictMode>
    );
  }
  
  export default App;
