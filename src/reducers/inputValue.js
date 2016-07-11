import React from 'react'
import { UPDATE_INPUT } from '../actions'

export default (state = '', action) => {
  switch(action.type) {
    case UPDATE_INPUT:
      return action.inputValue
    default:
      return state
  }
}
