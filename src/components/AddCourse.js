import React, { Component } from 'react';
import { Segment, Input, Form, Header, Modal, Divider, Button} from 'semantic-ui-react'
import { Link } from "react-router-dom"

import NavBar from './NavBar'
import Group from './Group'

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
  { key: '11', text: '11', value: '11' },
  { key: '12', text: '12', value: '12' },
  { key: '13', text: '13', value: '13' },
  { key: '14', text: '14', value: '14' },
  { key: '15', text: '15', value: '15' },
]


export default class AddCourse extends Component{


  state = {
    course_id: "",
    class_number: "",
    group_size: "",
    course_id_error: false,
    class_num_error: false,
    course_sect_error: false,
    modalOpen: false
  }

  onSubmit = () => {
    this.setState({ course_id_error: this.state.course_id != "SWEN-101" })
    this.setState({ class_num_error: (this.state.class_number != "4")})
    this.setState({ course_sect_error: this.state.course_sect != "05"})


    if(this.state.course_id === "SWEN-101" && this.state.class_number === "4" && this.state.course_sect === "05"){
      // upon clicking submit
      // conirm/acknowledge the submission for user
      // inform mainpage of new class to display potential buddys
      this.setState({modalOpen: true})
      this.props.onAddCourse()
    }
  }

  onCourseIdChange = (ev, data) => {
    this.setState({ course_id: data.value})
  }

  onClassNumChange = (ev, data) => {
    this.setState({ class_number: data.value})
  }

  onCourseSectionChange = (ev, data) => {
    this.setState({course_sect: data.value})
  }

  hideModal = () => {
    this.setState({ modalOpen: false })

  }

  render(){
    const { value } = this.state
        return (

          <React.Fragment>
            <NavBar page='add-course'/>
            <div style={{ padding: 100}}>
              <Header as='h1'>New Course</Header>

              <Segment raised>
                <Form>
                  <Form.Group widths='4'>
                    <Form.Input fluid label='Course ID' placeholder='(eg: SWEN-101)' onChange={this.onCourseIdChange} error={this.state.course_id_error}/>
                    <Form.Input fluid label='Course Section' placeholder='(eg: 05)' onChange={this.onCourseSectionChange} error={this.state.course_sect_error} />
                  </Form.Group>
                  <Form.Select width='2' fluid label='Ideal Group size' options={options} placeholder='(eg: 4)' onChange={this.onClassNumChange} error={this.state.class_num_error}/>

                  <Form.Checkbox label='NTID student' />
                  <Modal trigger={<Form.Button onClick={this.onSubmit}>Submit</Form.Button>}
                    open={this.state.modalOpen}
                    onClose={this.hideModal}>
                    <Modal.Header>You've been added to this class:</Modal.Header>
                    <Modal.Header>SWEN-101</Modal.Header>
                    <Modal.Content>
                      <Modal.Description>
                        <Link to='/'> <Button>OK</Button> </Link>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </Form>
              </Segment>
            </div>
          </React.Fragment>

        )

    const InputCourseID = () => <Input focus placeholder='Course ID (eg: SWEN-101)' />
    const InputClassNumber = () => <Input focus placeholder= 'Class number (eg: 03)' />

    // export default InputExampleFocus
    const divStyle = {
      padding: 20
    }

  }

}
