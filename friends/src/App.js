import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/friends" component={Friends} />
      </div>
    );
  }
}

export default App;
