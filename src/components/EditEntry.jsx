import React, { useContext, useState } from 'react';
import { SAVE_ENTRY, VIEW_ENTRY } from './../reducers/entries';
import { EntriesContext } from './../contexts/entries';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { timestampFromDate } from '../utils';

const EditEntry = (entry = {}) => {
  const {
    dispatch,
    state: { entries, editId },
  } = useContext(EntriesContext);

  const isEdit = Object.keys(entry).length > 0;
  const formDisabled = !isEdit && editId;

  const newEntry = {
    date: timestampFromDate(new Date()),
    country: {
    },
    body: '',
  };

  const countriesList = countryList().getData();

  let [values, setValues] = isEdit ? useState(entry) : useState(newEntry);
  const submitDisabled = !values.body.length || !Object.keys(values.country).length;

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleCountry = event => {
    setValues({ ...values, country: event });
  };

  const handleDate = date => {
    const timestamp = timestampFromDate(date);
    setValues({ ...values, date: timestamp });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: SAVE_ENTRY,
      payload: {
        id: isEdit ? entry.id : entries.length + 1,
        ...values,
      },
    });
  };

  const handleCancel = event => {
    event.preventDefault();
    dispatch({
      type: VIEW_ENTRY,
      payload: {
        id: entry.id,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        opacity: formDisabled ? '0.2' : 1,
      }}
    >
      <aside>
        <DatePicker
          name="date"
          selected={new Date(values.date * 1000)}
          onChange={handleDate}
          dateFormat="MMMM d, yyyy"
          disabled={formDisabled}
          required
        />
        <Select
          options={countriesList}
          value={values.country}
          placeholder='Select country'
          onChange={handleCountry}
          theme={null}
          required
        />
      </aside>
      <textarea
        name="body"
        value={values.body}
        onChange={handleChange}
        disabled={formDisabled}
        required
      />
      <button type="submit" disabled={submitDisabled}>
        {isEdit ? 'Save Entry' : 'Add Entry'}
      </button>
      {isEdit ? (
        <button type="submit" onClick={handleCancel}>
          Discard
        </button>
      ) : null}
    </form>
  );
};

export default EditEntry;
