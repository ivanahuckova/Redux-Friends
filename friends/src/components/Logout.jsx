import React from 'react';
import { logout } from '../actions/actionCreators';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Logout extends React.Component {
  render() {
    return (
      <button
        onClick={event => {
          event.preventDefault();
          localStorage.clear();
          this.props.logout();
        }}>
        Logout
      </button>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
