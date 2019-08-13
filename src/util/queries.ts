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

export const loadReservationsQuery = gql`
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