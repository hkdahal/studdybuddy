import { LEAVE_GROUP } from '../constants'

export const leaveGroup = (groupId) => {
  return dispatch => {
    return dispatch({
      type: LEAVE_GROUP,
      payload: { id: groupId }
    })
  }
}
