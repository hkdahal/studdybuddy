import { connect } from 'react-redux'
import { turnBadgeOff } from '../actions/group_actions'

import MyGroups from '../components/MyGroups'

const mapStateToProps = state => {
  return { groups: Object.values(state.groups.current)}
}

const mapDispatchToProps = dispatch => ({
  onBadgeOff: payload => {
    dispatch(turnBadgeOff(payload))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups)
