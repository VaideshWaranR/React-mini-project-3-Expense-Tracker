import { GlobalContext } from "./GlobalContext";
import React from 'react'

const GlobalState = ({children}) => {
    const name="vaidesh";
  return (
    <GlobalContext.Provider value={name}>
    {children}
   </GlobalContext.Provider>
  )
}

export default GlobalState
