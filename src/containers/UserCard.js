import { connect } from 'react-redux'
import { connectWithUser, dislikeUser, joinGroup } from '../actions/group_actions'

import UserCard from '../components/UserCard'

const mapStateToProps = state => ({
  groups: state.groups.ongoing
})

const mapDispatchToProps = dispatch => ({
  onConnectUser: payload => {
    dispatch(connectWithUser(payload))
  },
  onDislikeUser: payload => {
    dispatch(dislikeUser(payload))
  },
  onJoinGroup: payload => {
    dispatch(joinGroup(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
