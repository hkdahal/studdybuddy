import React, { Component } from 'react'
import NavBar from '../containers/NavBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = this.props.groups || []
    const groupComponents = groups.map(group => (
      <CSSTransition key={group.id} timeout={500} classNames="fade">
        <Group {...group }/>
      </CSSTransition>
    ))
    return (
      <React.Fragment>
        <NavBar page='home'/>
        <div style={{ padding: 20 }}>
          <TransitionGroup className="my-groups">
            {groupComponents}
          </TransitionGroup>
        </div>
      </React.Fragment>
    )
  }
}
