import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/friends" />
      </div>
    );
  }
}

export default App;
