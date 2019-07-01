import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import ReactCountryFlag from 'react-country-flag';
import { EDIT_ENTRY, REMOVE_ENTRY } from './../reducers/entries';
import { EntriesContext } from './../contexts/entries';
import { dateFromTimestamp } from '../utils';

const ViewEntry = ({ id, date, country, body }) => {
  const { dispatch } = useContext(EntriesContext);

  const handleEdit = () => {
    dispatch({
      type: EDIT_ENTRY,
      payload: { id },
    });
  };

  const handleRemove = () => {
    if (confirm('Remove item?')) {
      dispatch({
        type: REMOVE_ENTRY,
        payload: { id },
      });
    }
  };

  return (
    <Fragment>
      <header>
        <h2>
          Post <b>#{id ? id : ''}</b> at <b>{date ? dateFromTimestamp(date) : ''}</b> being in: 
          <b>{country ? `${country.label}` : ''}</b>
          {country ? (
            <ReactCountryFlag code={country.value.toLowerCase()} svg />
          ) : null}
        </h2>
        <aside>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </aside>
      </header>
      <figure>{body}</figure>
    </Fragment>
  );
};

export default ViewEntry;

ViewEntry.propTypes = {
  id: PropTypes.number,
  date: PropTypes.number,
  country: PropTypes.object,
  body: PropTypes.string,
};
