import React, { Component } from 'react'
import NavBar from './NavBar'

import { DISLIKED, CONFIRMED, NOT_DECIDED } from '../constants'

import Group from './Group'

export default class HomePage extends Component {
  render() {
    const groups = Object.values({
      1: { id: 1, name: 'Quality Assurance of Weaved Systems ', users: [
        { id: 132, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
        { id: 14, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: DISLIKED },
        { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED },
        { id: 114, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: DISLIKED },
        { id: 115, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED }
      ] },
      2: { id: 2, name: 'Concurrent Basket Weaving Management', users: [
        { id: 6, name: 'Tommy Chong', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 8, name: 'Trevor Nouh', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 112, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: DISLIKED },
        { id: 122, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
        { id: 132, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      ] },
      3: { id: 3, name: 'Intro to Weaving Theory', users: [
        { id: 11, name: 'Mom Spaghetti', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 12, name: 'Jessi Monroe', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 5, name: 'Ally Bjork', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
        { id: 121, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: DISLIKED },
        { id: 124, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
        { id: 156, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
        { id: 15, name: 'Neil Heinman', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED }
      ] }
    })
    const groupComponents = groups.map(group => <Group key={group.id} {...group }/>)
    const divStyle = {
      padding: 20
    }
    return (
      <React.Fragment>
        <NavBar page='home'/>
        <div style={divStyle}>
          {groupComponents}
        </div>
      </React.Fragment>
    )
  }
}
