import React, { Component } from 'react'
import { Header } from 'semantic-ui-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import NavBar from './NavBar'
import Group from '../containers/Group'

import '../styles/my_groups.css'

export default class MyGroups extends Component {
  render() {
    const groups = this.props.groups || [];
    const groupComponents = groups.map(group => (
      <CSSTransition key={group.id} timeout={500} classNames="fade">
        <Group {...group } current={true}/>
      </CSSTransition>
    ))
    return (
      <React.Fragment>
        <NavBar page='groups' />
        <div style={{ padding: 20 }}>
          <Header> Your Current Groups </Header>
          <TransitionGroup className="my-groups">
            {groupComponents}
          </TransitionGroup>
        </div>
      </React.Fragment>
    )
  }
}
