import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import { Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul id="Navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/" element={<About />} />
        </Routes>
      </div>
    );//return
  }//render
}//App

export default App;
