import { LEAVE_GROUP, CONNECT_WITH_USER, DISLIKED_USER, ADDED_CLASS, JOIN_GROUP, BADGE_OFF } from '../constants'

export const leaveGroup = (groupId) => {
  return dispatch => {
    return dispatch({
      type: LEAVE_GROUP,
      payload: { id: groupId }
    })
  }
}

export const connectWithUser = (payload) => {
  const { groupId, userId } = payload
  return dispatch => {
    return dispatch({
      type: CONNECT_WITH_USER,
      payload: { groupId, userId }
    })
  }
}

export const dislikeUser = (payload) => {
  const { groupId, userId } = payload
  return dispatch => {
    return dispatch({
      type: DISLIKED_USER,
      payload: { groupId, userId }
    })
  }
}


export const addCourse = (payload) => {
  return dispatch => {
    return dispatch({
      type: ADDED_CLASS,
      payload: {}
    })
  }
}

export const joinGroup = (payload) => {
  const { groupId } = payload
  return dispatch => {
    return dispatch({
      type: JOIN_GROUP,
      payload: { groupId }
    })
  }
}

export const turnBadgeOff = () => {
  return dispatch => {
    return dispatch({
      type: BADGE_OFF,
      payload: {}
    })
  }
}
