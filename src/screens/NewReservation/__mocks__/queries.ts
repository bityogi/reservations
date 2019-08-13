import uuid from 'uuid/v4';

import { NewReservationInputType } from '../queries';


export const addNewReservation = async (input: NewReservationInputType) => {

  return new Promise((resolve) => {
    const newReservation = {
      id: uuid(),
      ...input
    }

    resolve(newReservation);
  });
} 