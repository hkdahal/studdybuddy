import React, { Component } from 'react'
import { Button, Divider, Modal, Card, Segment, Header } from 'semantic-ui-react'
import { Accordion, Icon } from 'semantic-ui-react'

import UserCard from '../containers/UserCard'

export default class Group extends Component {

  state = {activeIndex : 1 }

  onLeaveGroup = () => {
    this.props.onLeaveGroup(this.props.id)
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { name, email, id, current } = this.props
    const { activeIndex } = this.state
    const users = Object.values(this.props.users) || []
    const userCards = users.map(user => (
      <UserCard {...user} group={name} groupId={id} key={user.id} currentGroup={current || false} />
    ))
    return (
      <Segment raised>

      <Accordion.Title active={activeIndex === id} index={id} onClick={this.handleClick}>
        <Icon name='dropdown' /> {name}
      </Accordion.Title>


        { current && (
          <React.Fragment>
            <Modal
              trigger={<Button floated='right' color='red'> Leave Group </Button>}
              header='Are you sure you want to leave this group?'
              content='Your group members will be notified if you leave.'
              actions={['No', { key: 'yes', content: 'Yes', negative: true, onClick: this.onLeaveGroup }]}
            />
            <a href={`mailto:${email}`}><Button color='green'>Email Group</Button></a>
            <Divider/>
          </React.Fragment>
        )}

        <Accordion.Content active={activeIndex === id}>
        <Card.Group itemsPerRow={5}>
          {userCards}
        </Card.Group>
        </Accordion.Content>

      </Segment>
    )
  }
}
