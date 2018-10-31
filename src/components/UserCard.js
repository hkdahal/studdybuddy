import React, { Component } from 'react';
import { Header, Icon, Button, Segment, Card, Grid, Image, Modal } from 'semantic-ui-react'

import { randomPic, LIKED, DISLIKED, CONFIRMED } from '../constants'

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
    const highlightCard = { [LIKED]: 'green', [DISLIKED]: 'red' }
    if (currentGroup && status !== CONFIRMED) {
      return null
    } else if (!currentGroup && status === CONFIRMED) {
      return null
    }
    return (
      <Card raised={status !==DISLIKED} color={highlightCard[status]}>
        <Image onClick={this.showModal} src={randomPic([this.props.id])} />
        <Card.Content>
          <Card.Header><Header color={highlightCard[status]}>{name}</Header></Card.Header>
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
                trigger={<Button icon='check' color='green' disabled={status ===LIKED} onClick={this.showModal}/>}
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
                            <Header>{name}</Header>
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
