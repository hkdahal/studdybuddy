import React, { Component } from 'react';
import { Button, Card, Segment } from 'semantic-ui-react'

import UserCard from './UserCard'

export default class Group extends Component {
  render() {
    const { name, users, current } = this.props
    const userCards = users.map(user => (
      <UserCard {...user} group={name} key={user.id} currentGroup={current} />
    ))
    return (
      <Segment raised>
        { current && <React.Fragment>
          <Button floated='right' color='red'>Leave Group</Button>
          <Button floated='right' color='green'>Email Group</Button>
        </React.Fragment>}
        <h3>{name}</h3>
        <Card.Group itemsPerRow={5}>
          {userCards}
        </Card.Group>
      </Segment>
    )
  }
}
