import React from 'react';
import ReactDOM from 'react-dom';
import EditEtnry from './components/EditEntry';
import EntriesList from './components/EntriesList';
import { EntriesContextProvider } from './contexts/entries';

import './styles.styl';

function App() {
  return (
    <EntriesContextProvider>
      <EntriesList />
      <EditEtnry />
    </EntriesContextProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
