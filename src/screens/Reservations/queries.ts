import gql from 'graphql-tag';
import { client } from '../../util/requests';
import { ReservationType } from '../../util/types';

export const getReservations = async () => {
  const query = gql`
    query loadReservations {
      reservations(first: 25, orderBy: createdAt_DESC) {
        id
        name
        hotelName
        arrivalDate
        departureDate
      }
    }
  `;
  const { data: { reservations }} = await client.query({ 
    query,
    fetchPolicy: 'no-cache'
  });

  return reservations.map((r : ReservationType) => ({
    ...r,
    arrivalDate: new Date(r.arrivalDate),
    departureDate: new Date(r.departureDate)
  }));
} 