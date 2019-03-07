import React from 'react';

export default class Logout extends React.Component {
  render() {
    return (
      <button
        onClick={event => {
          event.preventDefault();
          localStorage.clear();
        }}>
        Logout
      </button>
    );
  }
}
