import React, { PropTypes } from 'react'

const ToDo = ( { onClick, completed, text } ) => (
  <li
    onClick={ onClick }
    style={{
      background: completed ? '#4CAF50' : 'red',
      listStyleType: 'none',
      borderRadius: '10px',
      padding: '3px',
      margin: '1px'
    }}
  >
    { text }
  </li>
)

ToDo.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default ToDo
