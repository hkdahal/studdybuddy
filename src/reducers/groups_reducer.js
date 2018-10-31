import { LEAVE_GROUP, CONNECT_WITH_USER, DISLIKED_USER, DISLIKED, LIKED, CONFIRMED, NOT_DECIDED } from '../constants'

const initialState = {
  current: {
    1: { id: 1, name: 'Quality Assurance of Weaved Systems ', users: {
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      6: { id: 6, name: 'Leo Ty', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED },
      9: { id: 9, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      5: { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: LIKED },
      14: { id: 14, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      15: { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED },
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      115: { id: 115, name: 'John Oliver', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED },
      7: { id: 7, name: 'Nick Catvy', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED }
    }},
    2: { id: 2, name: 'Concurrent Basket Weaving Management', users: {
      // 1: { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      6: { id: 6, name: 'Leo Ty', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED },
      15: { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED },
      2: { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      29: { id: 29, name: 'Matthew', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED },
      5: { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: LIKED },
      14: { id: 14, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      114: { id: 114, name: 'Wover Dum', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED }
    }},
    3: { id: 3, name: 'Intro to Weaving Theory', users: {
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      1: { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      2: { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      5: { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED },
      14: { id: 14, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      15: { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED },
      114: { id: 114, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED },
      115: { id: 115, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED },
      6: { id: 215, name: 'Matt Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED }
    }}
  }

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
  },
  [CONNECT_WITH_USER]: (state, action) => {
    const { groupId, userId } = action.payload
    const users = state.current[groupId].users
    const userInfo = users[userId]
    return {
      ...state,
      current: {
        ...state.current,
        [groupId]: {
          ...state.current[groupId],
          users: {
            ...users,
            [userId]: {
              ...userInfo,
              status: LIKED
            }
          }
        }
      }
    }
  },
  [DISLIKED_USER]: (state, action) => {
    const { groupId, userId } = action.payload
    const users = state.current[groupId].users
    const userInfo = users[userId]
    return {
      ...state,
      current: {
        ...state.current,
        [groupId]: {
          ...state.current[groupId],
          users: {
            ...users,
            [userId]: {
              ...userInfo,
              status: DISLIKED
            }
          }
        }
      }
    }
  }
 }

export default function groupsReducer (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
