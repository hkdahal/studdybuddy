import React, { Component } from 'react';
import { Segment, Form, Header, Grid } from 'semantic-ui-react'

<<<<<<< HEAD
import NavBar from '../containers/NavBar'
=======
import NavBar from './NavBar'
// import TutorClass from './TutorClass'
>>>>>>> ec581b5b2d3b7d21ea266000624b5b89902a8544

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

export default class BecomeTutor extends Component{
  state = {
    course_id: "",
    class_number: "",
    group_size: "",
    course_id_error: false,
    class_num_error: false,
    classes: {
      NA: { key: 'NA', text: 'Choose a class...', value: 'NA'},
      QAWS_101: { key: 'QAWS_101', text: 'QAWS_101', value: 'QAWS_101' },
      QAWS_331: { key: 'QAWS_331', text: 'QAWS_331', value: 'QAWS_331' },
      QAWS_444: { key: 'QAWS_444', text: 'QAWS_444', value: 'QAWS_444' },
    },
    selectedClass: undefined,
    currentClasses: []
  }

  onAdd = (ev, data) => {
    console.log(data);
    this.setState({ currentClasses: [...this.state.currentClasses, this.state.classes[this.state.selectedClass]] })
  }

  listenToOnChange = (e, data) => {
    console.log(data.value)
    if (data.value !== "NA") {
      this.setState({ selectedClass: data.value })
    }
  }

  render(){
    const classComponents = this.state.currentClasses.map(cl => {
      return (
        <div style={{ padding: 20}} key={cl.key}>
          <Segment raised>
            <Form>
              <Header>{cl.text}</Header>

              <Form.Input fluid label='Projects Done' placeholder='(e.g. HealthNet)'/>

              <Form.Input fluid label='Relevant Classes' placeholder='(e.g. QAWS_444)'/>

              <Form.Group widths='6'>
                <Form.Input fluid label='Grade Received' placeholder='(e.g. A, A-, B+, B)'/>
              </Form.Group>

              <Form.Select width='2' fluid label='Ideal Group Size' options={options} placeholder='(e.g. 3)' />

              <Form.Group>
                <Form.Button onClick={this.onSave}>Save</Form.Button>
                <Form.Button onClick={this.onDelete}>Delete</Form.Button>
              </Form.Group>
            </Form>
          </Segment>
        </div>
      )
    })
    return (
      <React.Fragment>
        <NavBar page='become-tutor'/>
        <div style={{padding: 20}}>
            <Header>Become a Tutor</Header>
            <Segment>
              <Form>
                <Grid>
                  <Grid.Column width={14}>
                    <Form.Select onChange={this.listenToOnChange} fluid options={Object.values(this.state.classes)} placeholder='Choose a class...'/>
                  </Grid.Column>
                  <Grid.Column width={1}>
                    <Form.Button onClick={this.onAdd}>Add</Form.Button>
                  </Grid.Column>
                </Grid>
              </Form>

              {classComponents}

              <div style={{ padding: 50}}>
                <Segment raised>
                  <Form.Input fluid label='Interests'/>
                  <Form.Input fluid label='Hobbies'/>
                  <Form.Input fluid label='Phone Number' placeholder='(xxx) xxx - xxxx'/>
                  <Form.Input fluid label='Email' placeholder='e.g. johnappleseed@rit.edu'/>
                  <Form.Input fluid label='Current GPA' placeholder='e.g. 3.5, 3.6, 3.7'/>
                </Segment>

                <Form.Checkbox label='Can you accommodate NTID students?' />
              </div>

               <div style={{ padding: 50}}>
                <Segment raised>
                  <Form.Button onClick={this.onSubmit}>Submit</Form.Button>
                </Segment>
              </div>
            </Segment>
          </div>

      </React.Fragment>
    )
  }

}
