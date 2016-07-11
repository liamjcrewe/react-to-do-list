import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import toDoApp from './reducers'
import App from './components/App'

let store = createStore(toDoApp)

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('main')
)
