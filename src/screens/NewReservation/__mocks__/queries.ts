import uuid from 'uuid/v4';

import { NewReservationInputType } from '../queries';


export const addNewReservation = async (input: NewReservationInputType) => {

  return new Promise((resolve) => {
    const newReservation = {
      id: uuid(),
      ...input,
      arrivalDate: new Date('10/10/2020'),
      departureDate: new Date('10/20/2020')
    }

    resolve(newReservation);
  });
} 