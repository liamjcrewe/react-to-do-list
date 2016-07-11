import React from 'react'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const UPDATE_INPUT = 'UPDATE_INPUT'

let nextTodoId = 0

export function addToDo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function toggleToDo(id) {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export function setVisibilityFilter(visibilityFilter) {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter
  }
}

export function updateInput(inputValue) {
  return {
    type: UPDATE_INPUT,
    inputValue
  }
}
