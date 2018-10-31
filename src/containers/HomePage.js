import { connect } from 'react-redux'

import HomePage from '../components/HomePage'

const mapStateToProps = state => (
  { groups: Object.values(state.groups.ongoing)}
)

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
