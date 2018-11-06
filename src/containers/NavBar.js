import { connect } from 'react-redux'

import NavBar from '../components/NavBar'

const mapStateToProps = state => ({
  notifyJoined: state.groups.notifyJoined
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
