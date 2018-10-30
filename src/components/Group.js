import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react'

import UserCard from './UserCard'

export default class Group extends Component {
  render() {
    const { name, users } = this.props
    const userCards = users.map(user => (
      <UserCard {...user} group={name} key={user.id} />
    ))
    return (
      <Segment raised>
        <h3>{name}</h3>
        <Card.Group itemsPerRow={5}>
          {userCards}
        </Card.Group>
      </Segment>
    )
  }
}
