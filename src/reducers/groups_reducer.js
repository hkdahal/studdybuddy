import { LEAVE_GROUP, CONNECT_WITH_USER, DISLIKED_USER, DISLIKED, LIKED, CONFIRMED, NOT_DECIDED, ADDED_CLASS, JOIN_GROUP, BADGE_OFF } from '../constants'
// 'ade.jpg', 'matthew.png', 'chris.jpg', 'daniel.jpg', 'elliot.jpg', 'helen.jpg', 'christian.jpg'
const initialState = {
  newClass: false,
  current: {
    1: { id: 1, name: 'Quality Assurance of Weaved Systems ', email: 'group1@studdybuddy.com', users: {
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'elliot.jpg' },
      6: { id: 6, name: 'Leo Ty', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED, image: 'christian.jpg' },
      9: { id: 9, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'chris.jpg' },
      15: { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED, image: 'ade.jpg' },
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'matthew.png' },
    }},
    2: { id: 2, name: 'Concurrent Basket Weaving Management', email: 'group3@studdybuddy.com', users: {
      2: { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'ade.jpg' },
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'matthew.png' },
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'elliot.jpg' },
      29: { id: 29, name: 'Matthew', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED, image: 'chris.jpg' },
      7: { id: 7, name: 'Nick Catvy', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED, image: 'christian.jpg' }
    }},
    3: { id: 3, name: 'Intro to Weaving Theory', email: 'group3@studdybuddy.com', users: {
      3: { id: 3, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'matthew.png' },
      1: { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'chris.jpg' },
      2: { id: 2, name: 'Cortney Weaver', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'ade.jpg' },
      4: { id: 4, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED, image: 'elliot.jpg' },
      5: { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: CONFIRMED, image: 'helen.jpg' }
    }}
  },
  ongoing: {
    4: { id: 4, name: 'Quality Assurance of Weaved Systems ', ideal_group_size: 4, users: {
      5: { id: 5, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: LIKED, image: 'daniel.jpg' },
      114: { id: 114, name: 'Steven Tyler', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED, image: 'ade.jpg' },
      36: { id: 36, name: 'Mike Johnson', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED, image: 'matthew.png' },
      115: { id: 115, name: 'John Oliver', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'christian.jpg' },
      7: { id: 7, name: 'Nikki Catvy', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'helen.jpg' }
    }},
    5: { id: 5, name: 'Concurrent Basket Weaving Management', ideal_group_size: 4, users: {
      // 1: { id: 1, name: 'Leonard McGillicuddy', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: CONFIRMED },
      6: { id: 6, name: 'Leo Ty', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED, image: 'chris.jpg' },
      7: { id: 7, name: 'Nikki Catvy', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'daniel.jpg' },
      114: { id: 114, name: 'Wover Dum', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED, image: 'christian.jpg' },
      15: { id: 15, name: 'Ally Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'ade.jpg' }
    }},
    6: { id: 6, name: 'Intro to Weaving Theory', ideal_group_size: 4, users: {
      7: { id: 7, name: 'Nikki Catvy', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'helen.jpg' },
      15: { id: 15, name: 'Matt Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'matthew.png' },
      114: { id: 114, name: 'James Ty', bio: 'Into Leo-Nardy stuffs', details: 'Weave Engineering', status: NOT_DECIDED, image: 'daniel.jpg' },
      115: { id: 115, name: 'Dave Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'christian.jpg' },
      6: { id: 215, name: 'Elliot Bjork', bio: 'I wanna teach my son John weaving someday!', details: 'Weave Bio', status: DISLIKED, image: 'elliot.jpg' }
    }}
  },
  notifyJoined: false,
}

const ACTION_HANDLERS = {
  [BADGE_OFF]: state => {
    return {
      ...state,
      notifyJoined: false
    }
  },
  [JOIN_GROUP] : (state, action) => {
    const { groupId } = action.payload
    const ongoingGroups = state.ongoing
    const currGroup = ongoingGroups[groupId]
    const currGroupUsers = {}
    Object.values(currGroup.users).map(user => {
      if (user.status === LIKED) {
        currGroupUsers[user.id] = {...user, status: CONFIRMED }
      }
    })
    delete ongoingGroups[groupId]
    return {
      ...state,
      notifyJoined: true,
      current: {
        ...state.current,
        [currGroup.id]: {
          ...currGroup,
          users: currGroupUsers
        }
      },
      ongoing: {
        ...ongoingGroups
      }
    }
  },
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
    const users = state.ongoing[groupId].users
    const userInfo = users[userId]
    return {
      ...state,
      ongoing: {
        ...state.ongoing,
        [groupId]: {
          ...state.ongoing[groupId],
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
    const users = state.ongoing[groupId].users
    const userInfo = users[userId]
    return {
      ...state,
      ongoing: {
        ...state.ongoing,
        [groupId]: {
          ...state.ongoing[groupId],
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
  },

  [ADDED_CLASS]: (state, action) => {
    return{
      ...state,
      newClass: true,
      ongoing: {
        ...state.ongoing,
        463856383: { id: 463856383, name: 'SWEN-101', ideal_group_size: 4, users: {
          115534: { id: 115534, name: 'Kalvin Hobbes', bio: 'Into tigers and comics', details: 'Weave Engineering', status: NOT_DECIDED, image: 'daniel.jpg' },
          10135: { id: 10135, name: 'Harry P. Otter', bio: 'I thought this was crocheting!', details: 'Weave Bio', status: NOT_DECIDED, image: 'matthew.png' },
          1145: { id: 1145, name: 'Betsy Longly', bio: 'I wanna learn to weave!', details: 'Weave Bio', status: NOT_DECIDED, image: 'christian.jpg' },
          21533: { id: 21533, name: 'Elliot Jones', bio: 'I wanna teach my daughter Ellie weaving someday!', details: 'Weave Bio', status: NOT_DECIDED, image: 'elliot.jpg' },
          7343: { id: 7343, name: 'Nikki Catvy', bio: 'Help CS is too hard', details: 'Weave Bio', status: NOT_DECIDED, image: 'helen.jpg' }
        }}
      }
    }
  }
}

export default function groupsReducer (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
