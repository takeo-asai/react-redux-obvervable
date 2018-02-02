import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions';

const PingPong = props => (
  <div className="pingpong">
    PingPong status: {props.status}
    <button onClick={() => props.handleClick()}>Ping</button>
  </div>
);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(Actions.ping());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PingPong);
