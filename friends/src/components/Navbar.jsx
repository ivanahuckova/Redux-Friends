import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/friends">Friends</Link>
    </nav>
  );
}
