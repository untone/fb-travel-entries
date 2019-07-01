import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EntriesContext } from './../contexts/entries';
import ViewEntry from './ViewEntry';
import EditEntry from './EditEntry';

const Entry = entry => {
  const {
    state: { editId },
  } = useContext(EntriesContext);
  const isEditing = entry.id === editId;
  return (
    <article>
      {isEditing ? <EditEntry {...entry} /> : <ViewEntry {...entry} />}
    </article>
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
};

export default Entry;
