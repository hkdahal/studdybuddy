import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar page='about'/>
        <h3>About</h3>
      </React.Fragment>
    )
  }
}
