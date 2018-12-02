import React, { Component } from 'react';
import { Segment, Form, Header, Grid, Icon, Popup, Input, Select, Modal, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom"

import NavBar from '../containers/NavBar'

const options = [
  { key: 'NA', text: 'Any Size', value: 'NA'},
  { key: '1', text: '1', value: '1' },
  { key: '2', text: '2', value: '2' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '4', value: '4' },
  { key: '5', text: '5', value: '5' },
  { key: '6', text: '6', value: '6' },
  { key: '7', text: '7', value: '7' },
  { key: '8', text: '8', value: '8' },
  { key: '9', text: '9', value: '9' },
  { key: '10', text: '10', value: '10' },
]

const gpaOptions = [
  { key: 'A', text: 'A', value: 'A' },
  { key: 'B', text: 'B', value: 'B' },
  { key: 'C', text: 'C', value: 'C' },
  { key: 'D', text: 'D', value: 'D' },
]

export default class BecomeTutor extends Component{
  state = {
    classes: {
      NA: { key: 'NA', text: 'Choose a class...', value: 'NA'},
      QAWS_101: { key: 'QAWS_101', text: 'QAWS_101', value: 'QAWS_101' },
      QAWS_331: { key: 'QAWS_331', text: 'QAWS_331', value: 'QAWS_331' },
      QAWS_444: { key: 'QAWS_444', text: 'QAWS_444', value: 'QAWS_444' },
    },
    selectedClass: undefined,
    currentClasses: [],
    currentGPA: "",
    current_gpa_error: false,
    modalOpen: false
  }

  onDelete = cl => {
    const newCurrentClass = this.state.currentClasses.filter(d => d.key !== cl)
    const updatedClasses = {
      ...this.state.classes,
      [cl]: {
        ...this.state.classes[cl],
        disabled: false
      }
    }
    this.setState({ currentClasses: [...newCurrentClass], classes: updatedClasses })
  }

  onAdd = (ev, data) => {
    const { classes, currentClasses, selectedClass } = this.state
    if (typeof selectedClass === "undefined") {
      return
    }
    if (this.isAlreadySelected(selectedClass)) {
      console.log("class already selected")
    } else {
      const updatedClasses = {
        ...classes,
        [selectedClass]: {
          ...classes[selectedClass],
          disabled: true
        }
      }
      this.setState({ currentClasses: [...currentClasses, classes[selectedClass]], classes:  updatedClasses})
    }
  }

  onCurrentGPAUpdate = (e, data) => {
    this.setState({ currentGPA: data.value })
  }

  listenToOnChange = (e, data) => {
    if (data.value !== "NA") {
      this.setState({ selectedClass: data.value })
    }
  }

  isAlreadySelected = selectedClass => {
    let classAlreadySelected = false
    this.state.currentClasses.forEach(cl => {
      if (cl.key === selectedClass) {
        classAlreadySelected = true
      }
    })
    return classAlreadySelected
  }

  onSubmit = () => {
    if (this.state.currentGPA === "3.5") {
      this.setState({modalOpen: true})
      console.log("valid ")
    } else {
      this.setState({ current_gpa_error: true})
    }
  }

  hideModal = () => {
    this.setState({ modalOpen: false })
  }

  render(){
    const classComponents = this.state.currentClasses.map((cl, k) => {
      return (
        <div style={{ padding: 20}} key={cl.key}>
          <Grid>
            <Grid.Column width={8}>
              <Segment>
                <Form>
                  <h2>{cl.text}<Icon link onClick={() => this.onDelete(cl.key)} color='red' name="trash alternate" /></h2>

                  <Form.Input width={14} fluid label='Projects Done' placeholder='(e.g. HealthNet)'/>

                  <Form.Input width={14} fluid label='Relevant Classes' placeholder='(e.g. QAWS_444)'/>

                  <Form.Field width={5} required>
                    <label>Grade Received</label>
                    <Select width='5' fluid label='' options={gpaOptions} placeholder='(e.g. A, B)' />
                  </Form.Field>
                  <Form.Select width='5' fluid label='Ideal Group Size' options={options} placeholder='(e.g. 3)' />
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
        </div>
      )
    })

    // const classesTutoring =
    return (
      <React.Fragment>
        <NavBar page='become-tutor'/>
        <div style={{padding: 20}}>
            <Header>Become a Tutor</Header>
            <Segment>
                <Form>
                  <Grid>
                    <Grid.Column width={5}>
                      <Form.Select onChange={this.listenToOnChange} fluid options={Object.values(this.state.classes)} placeholder='Choose a class...'/>
                    </Grid.Column>
                    <Grid.Column width={1}>
                      <Form.Button onClick={this.onAdd}>Add</Form.Button>
                    </Grid.Column>
                  </Grid>
                </Form>

                {classComponents}

                <div style={{ padding: 20}}>
                    <Form>
                      <Form.Field width={4}>
                        <Form.Input fluid label='Interests'/>
                      </Form.Field>

                      <Form.Field width={4} required error={this.state.current_gpa_error}>
                        <label>Current GPA</label>
                        <Input placeholder='e.g. 3.5' onChange={this.onCurrentGPAUpdate}/>
                      </Form.Field>
                      <Form.Field>
                        <Form.Checkbox label='Can you accommodate NTID students?' />
                      </Form.Field>

                      <Form.Field>
                        {
                          this.state.currentClasses.length === 0
                          ? <Popup
                              trigger={<Form.Button basic color='red' >Submit</Form.Button>}
                              content='Please add at least one class before submitting!'
                              hideOnScroll
                            />
                          : <Modal trigger={<Form.Button color='green' onClick={this.onSubmit} >Submit</Form.Button>}
                              open={this.state.modalOpen}
                              onClose={this.hideModal}>
                              <Modal.Header>You're a tutor now!</Modal.Header>
                              <Modal.Content>
                                <Modal.Description>
                                  <h3>You are marked as a tutor for following courses:</h3>
                                  {this.state.currentClasses.map(cl => {
                                    return <h4 key={cl.key}>- {cl.key}</h4>
                                  })}
                                  <Link to='/'> <Button>OK</Button> </Link>
                                </Modal.Description>
                              </Modal.Content>
                            </Modal>

                        }

                      </Form.Field>
                    </Form>
                </div>
            </Segment>
          </div>

      </React.Fragment>
    )
  }

}
