import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;
