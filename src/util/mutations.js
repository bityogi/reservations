import gql from 'graphql-tag';

export const newReservation = gql`
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