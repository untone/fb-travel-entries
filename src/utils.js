const dateFromTimestamp = timestamp => new Intl.DateTimeFormat('us-US', {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
}).format(timestamp * 1000);

const timestampFromDate = date => date.getTime() / 1000;

export {
  dateFromTimestamp,
  timestampFromDate
}
