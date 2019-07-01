import React, { useReducer, createContext } from 'react';
import entriesReducer from '../reducers/entries';

const EntriesContext = createContext();

const restoreEntries = () => {
  const item = localStorage.getItem('fb');
  let result;
  if (item) {
    result = JSON.parse(item);
  }
  return result || [];
};

const initialState = {
  entries: restoreEntries(),
  editId: null,
};

function EntriesContextProvider(props) {
  const [state, dispatch] = useReducer(entriesReducer, initialState);
  const value = { state, dispatch };

  return (
    <EntriesContext.Provider value={value}>
      {props.children}
    </EntriesContext.Provider>
  );
}

export { EntriesContext, EntriesContextProvider };
