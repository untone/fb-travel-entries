const LS_KEY = 'fb';

const dateFromTimestamp = timestamp => new Intl.DateTimeFormat('us-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
}).format(timestamp * 1000);

const timestampFromDate = date => date.getTime() / 1000;

const restoreEntries = () => {
  const item = localStorage.getItem(LS_KEY);
  let result;
  if (item) {
    result = JSON.parse(item);
  }
  return result || [];
};

const saveEntries = entries => {
  localStorage.setItem(LS_KEY, JSON.stringify(entries));
};

export {
  dateFromTimestamp,
  timestampFromDate,
  restoreEntries,
  saveEntries
}
