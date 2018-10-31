import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import NavBar from './NavBar'
import Group from '../containers/Group'

export default class MyGroups extends Component {
  render() {
    const groups = this.props.groups || [];
    const groupComponents = groups.map(group => <Group key={group.id} {...group } current={true}/>)
    return (
      <React.Fragment>
        <NavBar page='groups' />
        <div style={{ padding: 20 }}>
          <Header> Your Current Groups </Header>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
