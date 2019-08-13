import moment from 'moment';
import { string } from 'prop-types';

export function formatDate(dateString: string | Date) : string {
  const parsed = moment(new Date(dateString));

  if (!parsed.isValid()) {
    return "Invalid Date";
  }
  
  return parsed.format('D MMM YYYY');
}