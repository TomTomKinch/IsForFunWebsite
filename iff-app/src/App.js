import React from 'react';
import logo from './Images/IsForFunLogoCircleSmall.png';
import ham_icon from './Images/hamburg_icon_thin.png';
import './App.css';

class App extends React.Component {
  DropDown = () => {
    console.log("DropDown");
  } 
  render() {
    return (
      <div className="App">
        <header id="header" className="App-header">
          <img className="Ham-icon" 
            src={ham_icon} alt="ham" 
            onClick={this.DropDown}/>
          <img src={logo} className="IFF-logo" alt="logo" />
          <p className="Title">Is For Fun Podcast</p>
        </header>
        <div>
          <p>This is where the good stuff will go</p>
        </div>
        <footer className="App-footer">
          <div className="Footer-info"> The Bottom of the Page</div>
        </footer>
      </div>
    );
  }
}

export default App;
