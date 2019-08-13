import gql from 'graphql-tag';

export const reservationQuery = gql`
  query ReservationQuery ($where: ReservationWhereUniqueInput!) {
    reservation(where: $where) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;