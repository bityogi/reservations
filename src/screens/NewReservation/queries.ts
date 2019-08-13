import gql from 'graphql-tag';

import { client } from '../../util/requests';
import { reservationQuery } from '../../util/queries';
import { newReservation } from '../../util/mutations';

export type NewReservationInputType = {
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string
}

export const addNewReservation = async (input: NewReservationInputType) => {

  const variables = {
    input
  }
  
  const { data: { reservation } } = await client.mutate({ 
    mutation: newReservation,
    variables,
    update: (cache, { data }) => {
      cache.writeQuery({
        query: reservationQuery,
        variables: {
          where: {
            id: data.reservation.id
          }
        },
        data
      })
    }
  });

  return reservation;
} 