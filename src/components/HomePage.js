import React, { Component } from 'react'
import NavBar from './NavBar'

import { DISLIKED, CONFIRMED, NOT_DECIDED } from '../constants'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = this.props.groups || []
    const groupComponents = groups.map(group => <Group key={group.id} {...group }/>)
    return (
      <React.Fragment>
        <NavBar page='home'/>
        <div style={{ padding: 20 }}>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
