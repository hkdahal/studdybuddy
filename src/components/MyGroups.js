import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'

import NavBar from './NavBar'
import Group from './Group'

export default class MyGroups extends Component {
  render() {
    const currentGroups = [
      { id: 1, name: 'Quality Assurance of Weaved Systems ', users: [
        { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
        { id: 3, name: 'Mike Johnson', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio' }
      ] },
      { id: 2, name: 'Concurrent Basket Weaving Management', users: [
        { id: 2, name: 'Cortney Weaver', bio: 'Weaving is in my name', details: 'Weaving Science' },
      ] },
      { id: 3, name: 'Intro to Weaving Theory', users: [] }
    ]
    const groupComponents = currentGroups.map(group => <Group key={group.id} {...group } current={true}/>)
    return (
      <React.Fragment>
        <NavBar page='groups' />
        <div style={{ padding: 20 }}>
          <h3> Your Current Groups </h3>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
