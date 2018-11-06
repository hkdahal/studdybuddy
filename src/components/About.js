import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'
import NavBar from '../containers/NavBar'

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar page='about'/>
        <div style={{ padding: 20}}>
          <Header>About</Header>
        </div>
      </React.Fragment>
    )
  }
}
