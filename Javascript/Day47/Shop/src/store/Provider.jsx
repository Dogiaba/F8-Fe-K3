import { createContext, useReducer } from 'react'
import { initialState, reducer } from '../reducers/rootReducer';
export const GlobaContext =  createContext();

function Provider({children}) {
    const[state, dispatch]= useReducer(reducer, initialState);
  return (
    <GlobaContext.Provider value={{state, dispatch}}>
        {children}
    </GlobaContext.Provider>
  )
}

export default Provider