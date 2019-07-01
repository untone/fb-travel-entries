import React, { useReducer, createContext } from 'react';
import entriesReducer from '../reducers/entries';
import { restoreEntries } from '../utils';

const EntriesContext = createContext();

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
