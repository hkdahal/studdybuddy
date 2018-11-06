import React, { Component } from 'react'
import NavBar from '../containers/NavBar'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Accordion, Header, Icon } from 'semantic-ui-react'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = this.props.groups || []
    const groupComponents = groups.map(group => (
      <CSSTransition key={group.id} timeout={500} classNames="fade">
        <Group {...group } activeId={groups[0].id}/>
      </CSSTransition>
    ))
    return (
      <React.Fragment>
        <NavBar page='home'/>
        <Accordion>
          <div style={{ padding: 20 }}>
            <Header> Pending Matches </Header>
            <TransitionGroup className="my-groups">
              {groupComponents}
            </TransitionGroup>
          </div>
        </Accordion>
      </React.Fragment>
    )
  }
}
