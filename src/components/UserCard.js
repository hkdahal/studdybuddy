import React, { Component } from 'react';
import { Header, Icon, Button, Segment, Card, Grid, Image, Modal } from 'semantic-ui-react'

export default class UserCard extends Component {

  state = {
    modalOpen: false
  }

  showModal = () => this.setState({ modalOpen: true })

  hideModal = () => this.setState({ modalOpen: false })

  render() {
    const { name, bio, details, group } = this.props
    return (
      <Card raised>
        <Image onClick={this.showModal} size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>
            <span>{details}</span>
          </Card.Meta>
          <Card.Description>{bio}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button icon='x' color='red'/>
            <Modal
              trigger={<Button icon='check' color='green' onClick={this.showModal}/>}
              open={this.state.modalOpen}
              onClose={this.hideModal}
              >
                <Header>{name} + "'s Profile"</Header>
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
                  <Button color='red' onClick={this.hideModal} inverted>
                    <Icon name='x' /> Nope
                  </Button>
                  <Button color='green' onClick={this.hideModal} inverted>
                    <Icon name='checkmark' /> Confirm
                  </Button>
                </Modal.Actions>

            </Modal>
          </div>
        </Card.Content>
      </Card>
    )
  }
}
