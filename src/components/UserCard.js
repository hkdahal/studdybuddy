import React, { Component } from 'react';
import { Header, Icon, Button, Segment, Card, Grid, Image, Modal, Placeholder } from 'semantic-ui-react'

import { fullPicPath, LIKED, DISLIKED, CONFIRMED } from '../constants'

export default class UserCard extends Component {

  state = {
    modalOpen: false,
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  showModal = () => this.setState({ modalOpen: true })

  hideModal = () => this.setState({ modalOpen: false })

  onConnectWithUser = () => {
    this.props.onConnectUser({ groupId: this.props.groupId, userId: this.props.id })
    this.hideModal()
    const currGroup = this.props.groups[this.props.groupId]
    let likedUsers = 1
    for (let user in currGroup.users) {
      if (currGroup.users[user].status === LIKED) {
        likedUsers += 1
      }
    }
    if (likedUsers === currGroup.ideal_group_size-1) {
      this.props.onJoinGroup({ groupId: this.props.groupId })
    }
  }

  onDislikeUser = () => {
    this.props.onDislikeUser({ groupId: this.props.groupId, userId: this.props.id })
    this.hideModal()
  }

  cardBorder = () => {
    if (this.state.loading) return null
    if (this.props.status === LIKED) {
      return { borderStyle: 'solid', borderWidth: 2, borderColor: 'green'}
    } else if (this.props.status === DISLIKED) {
      return { borderStyle: 'solid', borderWidth: 2, borderColor: 'red'}
    }
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
      <Card raised={status !==DISLIKED} color={this.state.loading ? null : highlightCard[status]} style={this.cardBorder()}>
        {
          this.state.loading
            ? <Placeholder> <Placeholder.Image square /> </Placeholder>
            : <Image onClick={this.showModal} src={fullPicPath([this.props.image])} />
        }
        <Card.Content>
          {
            this.state.loading
              ? (
                <Placeholder>
                   <Placeholder.Header><Placeholder.Line length='long' /><Placeholder.Line length='long' /></Placeholder.Header>
                 </Placeholder>
              )
              : (
                <React.Fragment>
                  <Card.Header><Header color={highlightCard[status]}>{name}</Header></Card.Header>
                  <Card.Meta>
                    <span>{details}</span>
                  </Card.Meta>
                  <Card.Description color='black'>{bio}</Card.Description>
                </React.Fragment>
              )
          }
        </Card.Content>
        <Card.Content extra>
          {
            currentGroup
              ? this.state.loading
                ? <Placeholder.Header><Placeholder.Line length='long' /></Placeholder.Header>
                : <a href={`mailto:${name.split(" ")[0].toLowerCase()}@email.com`}><Icon name='mail' />{name.split(" ")[0].toLowerCase()}@email.com</a>
              : (
                <div className='ui two buttons'>
                  <Button icon='x' color='red'disabled={this.state.loading || status===DISLIKED} onClick={this.showModal}/>
                  <Modal
                    trigger={<Button icon='check' color='green' disabled={this.state.loading || status===LIKED} onClick={this.showModal}/>}
                    open={this.state.modalOpen}
                    onClose={this.hideModal}
                    >
                      <Header>Connect with {name} for {this.props.group} ?</Header>
                      <Modal.Content>
                        <div style={{ padding: 10 }}>
                          <Grid>
                            <Grid.Column width={8}>
                              <Image src={fullPicPath([this.props.image])} size='medium' />
                            </Grid.Column>
                            <Grid.Column width={8}>
                              <Segment>
                                <Header>{name}</Header>
                                <h5>Course: {group}</h5>
                                <span style={{ fontStyle: 'italic' }}>{details}</span>
                                <br/>
                                {bio}
                              </Segment>
                              <Segment basic>
                                <Button floated='left' color='red' onClick={this.onDislikeUser} inverted>
                                  <Icon name='x' /> Nope
                                </Button>
                                <Button floated='right' color='green' onClick={this.onConnectWithUser} inverted>
                                  <Icon name='checkmark' /> Confirm
                                </Button>
                              </Segment>
                            </Grid.Column>
                            </Grid>
                        </div>
                      </Modal.Content>

                      <Modal.Actions>
                        <Button color='grey' onClick={this.hideModal}>
                          Cancel
                        </Button>
                      </Modal.Actions>
                  </Modal>
                </div>
              )
          }
        </Card.Content>
      </Card>
    )
  }
}
