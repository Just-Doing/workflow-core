import React, { useReducer, useContext, createContext } from 'react';
import jsplumb from 'jsplumb';

const initState = {
  jsPlumbInstance: jsplumb.jsPlumb.getInstance(),
  nodes: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'node-add':
      return { ...state, nodes: payload };
    default:
      return state;
  }
};

const Context = createContext();

export default ({ children }) => {
  const contextValue = useReducer(reducer, initState);
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

const useJsPlub = () => useContext(Context);

export { useJsPlub };
