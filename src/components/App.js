import React from 'react'

import AddToDo from '../containers/AddToDo'
import VisibleToDoList from '../containers/VisibleToDoList'
import Footer from './Footer'

const divStyles = {
  margin: 'auto',
  width: '60%',
  padding: '10px',
  textAlign: 'center'
}

export default () => (
  <div style={ divStyles }>
    <AddToDo />
    <VisibleToDoList />
    <Footer />
  </div>
)
