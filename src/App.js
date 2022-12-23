import React from 'react';

import { AboutUs, Owner, FindUs, Footer, Gallery, Header, Intro, SpecialMenu, Reviews } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Owner />
    <Intro />
    <Reviews />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;