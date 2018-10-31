import React, { Component } from 'react';
import { Header, Icon, Button, Segment, Card, Grid, Image, Modal } from 'semantic-ui-react'

import { DISLIKED, CONFIRMED } from '../constants'

export default class UserCard extends Component {

  state = {
    modalOpen: false
  }

  showModal = () => this.setState({ modalOpen: true })

  hideModal = () => this.setState({ modalOpen: false })

  onConnectWithUser = () => {
    this.props.onConnectUser({ groupId: this.props.groupId, userId: this.props.id })
    this.hideModal()
  }

  onDislikeUser = () => {
    this.props.onDislikeUser({ groupId: this.props.groupId, userId: this.props.id })
    this.hideModal()
  }

  render() {
    const { name, bio, details, group, currentGroup, status } = this.props
    if (currentGroup && status !== CONFIRMED) {
      return null
    } else if (!currentGroup && status === CONFIRMED) {
      return null
    }
    return (
      <Card raised={status !==DISLIKED} color={status === DISLIKED ? 'red' : undefined }>
        <Image onClick={this.showModal} src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>{details}</span>
          </Card.Meta>
          <Card.Description color='black'>{bio}</Card.Description>
        </Card.Content>
        {
          !currentGroup && <Card.Content extra>
            <div className='ui two buttons'>
              <Button icon='x' color='red'disabled={status ===DISLIKED} onClick={this.showModal}/>
              <Modal
                trigger={<Button icon='check' color='green' onClick={this.showModal}/>}
                open={this.state.modalOpen}
                onClose={this.hideModal}
                >
                  <Header>Connect with {name} for {this.props.group} ?</Header>
                  <Modal.Content>
                    <div style={{ padding: 10 }}>
                      <Grid>
                        <Grid.Column width={8}>
                          <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='medium' />
                        </Grid.Column>
                        <Grid.Column width={8}>
                          <Segment>
                            <h3>{name}</h3>
                            <h5>Course: {group}</h5>
                            {details}
                            <br/>
                            {bio}
                          </Segment>
                        </Grid.Column>
                        </Grid>
                    </div>
                  </Modal.Content>

                  <Modal.Actions>
                    <Button color='grey' onClick={this.hideModal}>
                      Cancel
                    </Button>
                    <Button color='red' onClick={this.onDislikeUser} inverted>
                      <Icon name='x' /> Nope
                    </Button>
                    <Button color='green' onClick={this.onConnectWithUser} inverted>
                      <Icon name='checkmark' /> Confirm
                    </Button>
                  </Modal.Actions>
              </Modal>
            </div>
          </Card.Content>
        }
      </Card>
    )
  }
}
