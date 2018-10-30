const initialState = {}

const ACTION_HANDLERS = {
 }

export default function groupsReducer (state=initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
