import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './Store';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

export default App;


