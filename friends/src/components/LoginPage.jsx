import React from 'react';

class LoginPage extends React.Component {
  nameRef = React.createRef();
  passRef = React.createRef();

  render() {
    return (
      <div>
        <form>
          <div>
            Name:
            <input type="text" ref={this.nameRef} />
          </div>
          <div>
            Password:
            <input type="password" ref={this.passRef} />
          </div>
        </form>
      </div>
    );
  }
}
export default LoginPage;
