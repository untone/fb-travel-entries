import React, { useContext } from 'react';
import Entry from './Entry';
import { EntriesContext } from './../contexts/entries';

const EntriesList = () => {
  const {
    state: { entries },
  } = useContext(EntriesContext);
  return (
    <main>
      {entries.map((entry, index) => (
        <Entry key={index} {...entry} />
      ))}
    </main>
  );
};

export default EntriesList;
