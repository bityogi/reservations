import gql from 'graphql-tag';

import { client } from '../../util/requests';
import { ReservationType } from '../../util/types';
import { loadReservationsQuery } from '../../util/queries';

export const getReservations = async () => {
  // For loading reservations we won't get them from cache 
  // to ensure we always have the latest from server
  const { data: { reservations }} = await client.query({ 
    query: loadReservationsQuery,
    fetchPolicy: 'no-cache'
  });

  return reservations.map((r : ReservationType) => ({
    ...r,
    arrivalDate: new Date(r.arrivalDate),
    departureDate: new Date(r.departureDate)
  }));
} 