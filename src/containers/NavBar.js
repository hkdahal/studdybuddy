import { connect } from 'react-redux'

import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
  recentlyJoined: state.groups.recentlyJoined
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
