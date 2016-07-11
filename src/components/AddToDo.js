import React, { PropTypes } from 'react'

const buttonStyles = {
  background: '#4CAF50',
  border: 'none',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  borderRadius: '5px',
  margin: '5px',
  padding: '7px'
}

const inputStyles = {
  borderRadius: '5px',
  margin: '5px',
  padding: '5px'
}

const AddToDo = ({ inputValue, onInputChange, onAddToDo }) => {
  return (
    <form onSubmit={ onAddToDo(inputValue) } >
      <input value={ inputValue } onChange={ onInputChange } style={ inputStyles }/>
      <button type='submit' style={ buttonStyles } >
        Add ToDo
      </button>
    </form>
  )
}

AddToDo.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddToDo: PropTypes.func.isRequired
}

export default AddToDo
