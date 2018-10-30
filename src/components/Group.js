import React, { Component } from 'react';
import { Button, Grid, Image, Icon, Modal, Header, Card, Segment } from 'semantic-ui-react'

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
          <Modal
            trigger={<Button floated='right' color='red'>Leave Group</Button>}
            header='Are you sure you want to leave this group?'
            content='Your group members will be notified if you leave.'
            actions={['No', { key: 'yes', content: 'Yes', negative: true }]}
          />
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
