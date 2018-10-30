import React, { Component } from 'react';
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import store from '../config/store'
import HomePage from './HomePage'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage/>
      </Provider>
    )
  }
}
