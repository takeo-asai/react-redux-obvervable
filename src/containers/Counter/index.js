import React from 'react';
import { connect } from 'react-redux';
import Actions from '../../actions';

const Counter = props => (
  <div className="counter">
      hello world
    <button onClick={() => props.handleClick()}>Increment</button>
    <div>Count: {props.count}</div>
  </div>
);

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => {
      dispatch(Actions.increment());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
