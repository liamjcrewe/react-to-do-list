import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions'
import { updateInput } from '../actions'
import AddToDo from '../components/AddToDo'

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onInputChange: event => dispatch(updateInput(event.target.value)),
    onAddToDo: inputValue => function(event) {
      // Prevent full form submission
      event.preventDefault()

      if (!inputValue.trim()) {
        return
      }

      dispatch(addToDo(inputValue))
      dispatch(updateInput(''))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo)
