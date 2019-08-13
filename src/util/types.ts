import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { addListener } from 'cluster';

export type ReservationType = {
  id: string,
  name: string,
  hotelName: string,
  arrivalDate: Date,
  departureDate: Date
}

export type NavigationProp = {
  navigation : {
    navigate: (str: string, options?: object) => void,
    getParam: (str: string, defaultValue?: string | boolean) => string,
    addListener: (str: string, payload: object) => void
  }
  
};

export interface INavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}