import React from "react";

import "./App.css";

import Nav from "./components/nav";
import Header from "./components/header";
import Works from "./components/works";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <React.StrictMode>
      <div className="bg"></div>
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
