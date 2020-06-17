import React from 'react';
import logo from './Images/IsForFunLogoCircleSmall.png';
import ham_icon from './Images/hamburg_icon_thin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ham_icon} classname="ham-icon" />
        <img src={logo} className="IFF-logo" alt="logo" />
        <h className="Title"> Is For Fun Podcast</h>
      </header>
      <div>
        <p>This is where the good stuff will go</p>
      </div>
      <footer className="App-footer">
        <h className="footer-info"> The Bottom of the Page</h>
      </footer>
    </div>
  );
}

export default App;
