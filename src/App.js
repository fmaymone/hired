import React, { Component } from 'react';
import Home from './containers/Home'
import CounterWithRedux from './containers/CounterWithRedux'
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers/counterReducer';
import InputCounter from './containers/InputCounter';

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <div className="App">
          <header className="App-header">
            <InputCounter />
            <CounterWithRedux />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
