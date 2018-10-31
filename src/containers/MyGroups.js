import { connect } from 'react-redux'

import MyGroups from '../components/MyGroups'

const mapStateToProps = state => {
  return { groups: Object.values(state.groups.current)}
}

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups)
