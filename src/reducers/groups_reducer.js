import { LEAVE_GROUP } from '../actions/group_actions'

const initialState = {
  current: {
    1: { id: 1, name: 'Quality Assurance of Weaved Systems ', users: [
      { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio' }
    ] },
    2: { id: 2, name: 'Concurrent Basket Weaving Management', users: [
      { id: 6, name: 'Tommy Chong', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 8, name: 'Trevor Nouh', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
    ] },
    3: { id: 3, name: 'Intro to Weaving Theory', users: [
      { id: 11, name: 'Mom Spaghetti', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 12, name: 'Jessi Monroe', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 5, name: 'Ally Bjork', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering' },
      { id: 15, name: 'Neil Heinman', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio' }
    ] }
  },

}

const ACTION_HANDLERS = {
  [LEAVE_GROUP]: (state, action) => {
    const { id } = action.payload
    const currentGroups = state.current
    delete currentGroups[id]
    return {
      ...state,
      current: {
        ...currentGroups
      }
    }
  }
 }

export default function groupsReducer (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
