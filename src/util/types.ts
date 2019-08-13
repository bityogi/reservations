import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export type ReservationType = {
  id: string,
  name: string,
  hotelName: string,
  arrivalDate: Date,
  departureDate: Date
}

export interface INavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}