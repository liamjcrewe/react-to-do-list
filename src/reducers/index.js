import { combineReducers } from 'redux'

import toDos from './toDos'
import visibilityFilter from './visibilityFilter'
import inputValue from './inputValue'

export default combineReducers({
  toDos,
  visibilityFilter,
  inputValue
})
