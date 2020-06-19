import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home.js";
import Podcasts from "./Podcasts.js";
import Gnosh from "./GnoshCity.js";
import './App.css';
import logo from './Images/IsForFunLogoCircleSmall.png';
import ham_icon from './Images/hamburg_icon_thin.png';
import burger from './Images/burger.png';
import mic from './Images/mic.png';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header id="header" className="App-header">
          <img className="Ham-icon" 
            src={ham_icon} alt="ham" 
          />
          <Link to="/">
            <img src={logo} className="IFF-logo" alt="logo" />
          </Link>
          <p className="Title">Is For Fun Podcast</p>
          <Link to="/gnoshcity">
            <p className="HeaderOptions">GnoshCity</p>
            <img src={burger} className="burger-emoji" alt='burger'/>
          </Link> 
          <Link to="/podcasts">
            <p className="HeaderOptions">Podcasts</p>
            <img src={mic} className="mic-emoji" alt='mic'/>
          </Link>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/podcasts" component={Podcasts}/>
          <Route exact path="/gnoshcity" component={Gnosh}/>
          <Route path="/" render={() => <div>404 error</div>}/>
        </Switch>
        <footer className="App-footer">
          <div className="Footer-info"> The Bottom of the Page</div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;