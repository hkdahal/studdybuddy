import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar page='about'/>
        <Header>About</Header>
      </React.Fragment>
    )
  }
}
