export const EDIT_ENTRY = 'EDIT_ENTRY';
export const VIEW_ENTRY = 'VIEW_ENTRY';
export const SAVE_ENTRY = 'SAVE_ENTRY';
export const REMOVE_ENTRY = 'REMOVE_ENTRY';

const saveItems = entries => {
  localStorage.setItem('fb', JSON.stringify(entries));
};

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
      saveItems(entries);
      const editId = null;
      return { ...state, entries, editId };
    }
    case REMOVE_ENTRY: {
      let entries = state.entries.filter(entry => entry.id !== payload.id);
      return { ...state, entries };
    }
    default:
      return state;
  }
};

export default entriesReducer;
