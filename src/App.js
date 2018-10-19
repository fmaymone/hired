import React, { Component } from 'react';
import Home from './containers/Home'
import CounterWithRedux from './containers/CounterWithRedux'
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers/counterReducer';
import InputCounter from './containers/InputCounter';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Routes';
import { Link } from 'react-router-dom'

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
            <nav>
              <ul>
                <li><Link to='/hello_router'>Hello Router</Link></li>
              </ul>
            </nav>
              <InputCounter />
              <CounterWithRedux />
              <Router />
            </header>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
