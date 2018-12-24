import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './configs';

import Login from './pages/Login';
import Home from './pages/Home';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Home' component={Home} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
