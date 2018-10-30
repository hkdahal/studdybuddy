import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from '../config/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <h3>Hello there!</h3>
      </Provider>
    )
  }
}
