import { ADD_TODO, TOGGLE_TODO } from '../actions'

const toggleToDo = function (toDo, targetToDoId) {
  if (toDo.id !== targetToDoId) {
    return toDo
  }

  return { ...toDo, completed: !toDo.completed }
}

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map(toDo => toggleToDo(toDo, action.id))
    default:
      return state
  }
}
