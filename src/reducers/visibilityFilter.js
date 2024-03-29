import { SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions'

export default function (state = VisibilityFilters.SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter
    default:
      return state
  }
}
