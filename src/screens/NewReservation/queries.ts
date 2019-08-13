import gql from 'graphql-tag';

import { client } from '../../util/requests';
import { reservationQuery } from '../../util/queries';

export const addNewReservation = async (input) => {
  const mutation = gql`
    mutation CreateReservation($input: ReservationCreateInput!) {
      reservation: createReservation(data: $input) {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
    }
  `;

  const variables = {
    input
  }
  
  const { data: { reservation } } = await client.mutate({ 
    mutation,
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