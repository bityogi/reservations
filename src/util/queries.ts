import gql from 'graphql-tag';

export const reservationFragment = gql`
  fragment ReservationDetail on Reservation {
    id
    name
    hotelName
    arrivalDate
    departureDate
  }
`;

export const reservationQuery = gql`
  query ReservationQuery ($where: ReservationWhereUniqueInput!) {
    reservation(where: $where) {
      ...ReservationDetail
    }
  }
  ${reservationFragment}
`;

export const loadReservationsQuery = gql`
  query loadReservations {
    reservations(first: 25, orderBy: createdAt_DESC) {
      ...ReservationDetail
    }
  }
  ${reservationFragment}
`;