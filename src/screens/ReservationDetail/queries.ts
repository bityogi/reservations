import { reservationQuery } from '../../util/queries';
import { client } from '../../util/requests';

export const getReservation = async (id) => {
  
  const { data: { reservation }} = await client.query({ 
    query: reservationQuery,
    variables: {
      where: {
        id
      }
    }
  });

  return {
    ...reservation,
    arrivalDate: new Date(reservation.arrivalDate),
    departureDate: new Date(reservation.departureDate)
  }
} 