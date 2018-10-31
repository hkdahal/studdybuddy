export const LEAVE_GROUP = 'LEAVE_GROUP'

export const leaveGroup = (groupId) => {
  return dispatch => {
    return dispatch({
      type: LEAVE_GROUP,
      payload: { id: groupId }
    })
  }
}
