import { connect } from 'react-redux'
import { VisibilityFilters,
         toggleToDo } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (toDos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return toDos
    case VisibilityFilters.SHOW_COMPLETED:
      return toDos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return toDos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    toDos: getVisibleToDos(state.toDos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToDoClick: id => {
      dispatch(toggleToDo(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList)
