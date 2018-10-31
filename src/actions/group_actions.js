import { LEAVE_GROUP, CONNECT_WITH_USER, DISLIKED_USER } from '../constants'

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
