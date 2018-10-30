import React, { Component } from 'react'
import { Image, Menu, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"

import MyGroups from './MyGroups'

export default class MenuExampleInvertedSecondary extends Component {

  render() {
    const { page } = this.props
    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as='li'>
            <Link to='/'><Image src='/logo_white.png' size='mini' /></Link>
          </Menu.Item>
          <Menu.Item name='home' active={page === 'home'} as='li'>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item name='about' active={page === 'about'} as='li'>
            <Link to='/about'>About</Link>
          </Menu.Item>
          <Menu.Item name='groups' active={page === 'groups'} as='li'>
            <Link to='/groups'>Groups</Link>
          </Menu.Item>
          <Menu.Item name='become-tutor' active={page === 'become-tutor'} as='li'>
            <Link to='/become-tutor'>Become a Tutor</Link>
          </Menu.Item>
          <Menu.Item name='add-course' active={page === 'add-course'} as='li'>
            <Link to='/add-course'>Add Course</Link>
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
