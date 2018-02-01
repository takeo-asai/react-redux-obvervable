import React, { Component } from 'react';
import {connect} from 'react-redux';
import Actions from '../../actions';

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        hello world
        <button onClick={() => this.props.handleClick()}>Increment</button>
        <div>Count: {this.props.count}</div>
      </div>
    );
  }
}
function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(Actions.increment()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
