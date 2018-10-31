import React, { Component } from 'react'
import { Button, Modal, Card, Segment, Header } from 'semantic-ui-react'

import UserCard from '../containers/UserCard'

export default class Group extends Component {

  onLeaveGroup = () => {
    this.props.onLeaveGroup(this.props.id)
  }

  render() {
    const { name, email, id, current } = this.props
    const users = Object.values(this.props.users) || []
    const userCards = users.map(user => (
      <UserCard {...user} group={name} groupId={id} key={user.id} currentGroup={current || false} />
    ))
    return (
      <Segment raised>
        <Header>{name}</Header>
        { current && (
          <React.Fragment>
            <Modal
              trigger={<Button floated='right' color='red'>Leave Group</Button>}
              header='Are you sure you want to leave this group?'
              content='Your group members will be notified if you leave.'
              actions={['No', { key: 'yes', content: 'Yes', negative: true, onClick: this.onLeaveGroup }]}
            />
            <a href={`mailto:${email}`}><Button color='green'>Email Group</Button></a>
          </React.Fragment>
        )}
        <br/>
        <br/>
        <Card.Group itemsPerRow={5}>
          {userCards}
        </Card.Group>

      </Segment>
    )
  }
}
