  
// setup data layer 
// wo need this to track this basket 

import React, { createContext, useContext, useReducer } from 'react';

// this is data layer 
export const StateContext = createContext();

// build provider 
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inside of a Component 
export const useStateValue = () => useContext(StateContext);