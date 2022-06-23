import moment from 'moment';

const getDate = date => ({
  label: date.format("MMM D"),
  date: date.format('L')
});

export const getTimeSpan = date => {
  return [
    getDate(moment(date).subtract(1, 'days')),
    getDate(moment(date)),
    getDate(moment(date).add(1, 'days')),
  ]
}