import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import NavBar from './NavBar'

export default class MyGroups extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar page='groups' />
        <Segment raised>
        </Segment>
      </React.Fragment>
    )
  }
}
