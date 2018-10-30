import { combineReducers } from "redux"
import GroupsReducer from './groups_reducer'

 const rootReducer = combineReducers({
  groups: GroupsReducer
})
 export default rootReducer
