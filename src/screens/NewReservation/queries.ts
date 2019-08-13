import gql from 'graphql-tag';

import { client } from '../../util/requests';
import { reservationQuery } from '../../util/queries';

type NewReservationInputType = {
  name: string,
  hotelName: string,
  arrivalDate: string,
  departureDate: string
}

export const addNewReservation = async (input: NewReservationInputType) => {
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