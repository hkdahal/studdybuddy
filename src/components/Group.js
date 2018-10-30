import React, { Component } from 'react';
import { Button, Card, Image, Icon, Segment } from 'semantic-ui-react'

export default class Group extends Component {
  render() {
    const { name, users } = this.props.group
    const userCards = users.map(user => (
      <Card key={user.id} raised>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>{user.bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button icon='x' color='red'/>
            <Button icon='check' color='green'/>
          </div>
        </Card.Content>
      </Card>
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
