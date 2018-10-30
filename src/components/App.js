import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import 'semantic-ui-css/semantic.min.css'

import store from '../config/store'

import HomePage from './HomePage'
import About from './About'
import MyGroups from './MyGroups'

class Root extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About}/>
          <Route exact path="/groups" component={MyGroups}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </Provider>
    )
  }
}
