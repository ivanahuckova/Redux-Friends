import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFriends } from '../actions/actionCreators';

class Friends extends React.Component {
  componentDidMount() {
    this.props.getFriends();
  }
  render() {
    if (this.props.token) {
      return (
        <div>
          <h1>Friends list:</h1>
          {this.props.friends.map(friend => {
            return (
              <div>
                <h3>{friend.name}</h3>
                <div>{friend.age}</div>
                <div>{friend.email}</div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return <div>You need to login</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends,
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getFriends }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
