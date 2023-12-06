import React, { useReducer } from 'react'
import Shop from './components/Shop'
import { initialState, reducer } from './reducers/rootReducer'
const App = ()=> {
  const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      <Shop state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App