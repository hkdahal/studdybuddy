import React, { Component } from 'react'
import NavBar from './NavBar'
import { Accordion, Icon } from 'semantic-ui-react'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = this.props.groups || []
    const groupComponents = groups.map(group => <Group key={group.id} {...group }/>)
    return (
      <React.Fragment>

        <NavBar page='home'/>
        <Accordion>

          <div style={{ padding: 20 }}>
            {groupComponents}
          </div>

        </Accordion>
      </React.Fragment>
    )
  }
}
