import React, { Component } from 'react'
import NavBar from './NavBar'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = [
      { id: 1, name: 'Quality Assurance of Weaved Systems ', users: [
        { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
        { id: 2, name: 'Cortney Weaver', bio: 'Weaving is in my name', details: 'Weaving Science' },
        { id: 3, name: 'Mike Johnson', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio' }
      ] },
      { id: 2, name: 'Concurrent Basket Weaving Management', users: [] },
      { id: 3, name: 'Intro to Weaving Theory', users: [] }
    ]
    const groupComponents = groups.map(group => <Group key={group.id} {...group }/>)
    const divStyle = {
      padding: 20
    }
    return (
      <React.Fragment>
        <NavBar page='home'/>
        <div style={divStyle}>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
