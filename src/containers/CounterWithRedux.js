import React from 'react';
import {connect} from 'react-redux';

class CounterWithRedux extends React.Component {
  state = { count: 0 }

 /*
Where Do Actions Come From?
One piece of this puzzle remains: we need a way to feed an action into our reducer function so that we can increment and decrement the counter.
Actions are not born, but they are dispatched, with a handy function called dispatch.
The dispatch function is provided by the instance of the Redux store. That is to say, you can’t just import { dispatch } and be on your way. You can call store.dispatch(someAction), but that’s not very convenient since the store instance is only available in one file.
*/
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(CounterWithRedux);
