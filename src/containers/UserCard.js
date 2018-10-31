import { connect } from 'react-redux'
import { connectWithUser, dislikeUser } from '../actions/group_actions'

import UserCard from '../components/UserCard'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onConnectUser: payload => {
    dispatch(connectWithUser(payload))
  },
  onDislikeUser: payload => {
    dispatch(dislikeUser(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserCard)
