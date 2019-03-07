import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../actions/actionCreators';

class Login extends React.Component {
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
          <button
            onClick={event => {
              event.preventDefault();
              this.props.login(this.nameRef.current.value, this.passRef.current.value);
              this.nameRef.current.value = '';
              this.passRef.current.value = '';
            }}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
