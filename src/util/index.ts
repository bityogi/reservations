import moment from 'moment';

export function formatDate(dateString: string) : string {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return dateString;
  }

  return parsed.format('D MMM YYYY');
}