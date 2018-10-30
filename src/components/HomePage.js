import React, { Component } from 'react';
import { Button, Grid, Icon } from 'semantic-ui-react'
import NavBar from './NavBar'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = [
      { id: 1, name: 'Quality Assurance of Weaved Systems ', users: [
        { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs' },
        { id: 2, name: 'Cortney Weaver', bio: 'Weaving is in my name' },
        { id: 3, name: 'Mike Johnson', bio: 'I have a dream I wanna teach my son John weaving someday!' }
      ] },
      { id: 2, name: 'Concurrent Basket Weaving Management', users: [] },
      { id: 3, name: 'Intro to Weaving Theory', users: [] }
    ]
    const groupComponents = groups.map(group => <Group group={group} key={group.id}/>)
    const divStyle = {
      padding: 20
    }
    const buttonsStyle = {
      padding: 5,
      paddingBottom: -5
    }
    return (
      <React.Fragment>
        <NavBar/>
        <div style={divStyle}>
          <Button color='purple'>Become a Tutor!</Button>
          <Button secondary><Icon name='add square' />Add Course</Button>
        </div>
        <div style={divStyle}>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
