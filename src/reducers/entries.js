import { saveEntries } from '../utils';

export const EDIT_ENTRY = 'EDIT_ENTRY';
export const VIEW_ENTRY = 'VIEW_ENTRY';
export const SAVE_ENTRY = 'SAVE_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

const entriesReducer = (state, { type, payload }) => {
  switch (type) {
    case EDIT_ENTRY: {
      const editId = payload.id;
      return { ...state, editId };
    }
    case VIEW_ENTRY: {
      const editId = null;
      return { ...state, editId };
    }
    case SAVE_ENTRY: {
      let entries = state.entries.slice(0);
      const index = entries.findIndex(entry => entry.id === payload.id);
      if (index !== -1) {
        entries[index] = payload;
      } else {
        entries = [...state.entries.slice(0), payload];
      }
      saveEntries(entries);
      const editId = null;
      return { ...state, entries, editId };
    }
    case REMOVE_ENTRY: {
      let entries = state.entries.filter(entry => entry.id !== payload.id);
      saveEntries(entries);
      return { ...state, entries };
    }
    default:
      return state;
  }
};

export default entriesReducer;
