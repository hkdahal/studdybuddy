import { connect } from 'react-redux'
import { leaveGroup } from '../actions/group_actions'

import Group from '../components/Group'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onLeaveGroup: payload => {
    dispatch(leaveGroup(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Group)
