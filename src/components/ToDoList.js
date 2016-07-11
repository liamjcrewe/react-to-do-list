import React, { PropTypes } from 'react'
import ToDo from './ToDo'

const ToDoList = ({ toDos, onToDoClick }) => (
  <ul style={{
    padding: 0,
    margin: 0
  }}>
    {toDos.map(toDo =>
      <ToDo
        key={ toDo.id }
        completed={ toDo.completed }
        text={ toDo.text }
        onClick={ () => onToDoClick(toDo.id) }
      />
    )}
  </ul>
)

ToDoList.PropTypes = {
  toDos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToDoClick: PropTypes.func.isRequired
}

export default ToDoList
