import gql from 'graphql-tag';

import { reservationFragment } from './queries'

export const newReservation = gql`
  mutation CreateReservation($input: ReservationCreateInput!) {
    reservation: createReservation(data: $input) {
      ...ReservationDetail
    }
  }
  ${reservationFragment}
`;