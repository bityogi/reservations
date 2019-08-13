import { createStackNavigator, createAppContainer } from 'react-navigation';
import Reservations from './src/screens/Reservations';
import NewReservation from './src/screens/NewReservation';
import ReservationDetail from './src/screens/ReservationDetail';

const navigator = createStackNavigator(
  {
    Reservations: Reservations,
    NewReservation: NewReservation,
    ReservationDetail: ReservationDetail
  },
  {
    initialRouteName: 'Reservations',
    defaultNavigationOptions: {
      title: 'Reservations'
    },
    headerMode: 'screen',
    cardStyle: { backgroundColor: '#f5f5f5' },
  }
);

export default createAppContainer(navigator);
