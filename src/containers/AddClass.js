import { connect } from 'react-redux'
import { addCourse } from '../actions/group_actions'

import AddCourse from '../components/AddCourse'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  onAddCourse: payload => {
    dispatch(addCourse(payload))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)
