import React, { Component } from 'react';

// components
import Nav from './Nav';
import Header from "./Header";
import AboutUs from "./AboutUs";
import Team from "./Team";
import Footer from "./Footer";

export class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <AboutUs />
        <Team />
        <Footer/>

      </div>
    )
  }
}

export default App

