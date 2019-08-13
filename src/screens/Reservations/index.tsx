import React, { PureComponent } from 'react';
import {
  StyleSheet,
  FlatList
} from 'react-native';
import ActionButton from 'react-native-action-button';



import ReservationCard from './card';
import { getReservations } from './queries';
import { ReservationType, NavigationProp } from '../../util/types';

const styles = StyleSheet.create({
  list: {
    paddingTop: 20,
    backgroundColor: '#F3F3F3'
  },
});

interface ReservationsState {
  reservations: ReservationType[]
}

class Reservations extends PureComponent<NavigationProp, ReservationsState> {
  
  state = {
    reservations: []
  }

  componentDidMount() {
    getReservations()
      .then(reservations => {
        this.setState({ reservations });
      });
  }

  willFocus = this.props.navigation.addListener(
    'willFocus',
    () => {
      const refresh = this.props.navigation.getParam('refresh', false)
      if (refresh) {
        getReservations()
          .then(reservations => {
            this.setState({ reservations });
          });
      }
    }
  );

  handleAddReservation = () => {
    const { navigation } = this.props;
    navigation.navigate('NewReservation');
  }

  onReservationDetailSelect = (reservationId: string) => {
    const { navigation } = this.props;
    navigation.navigate('ReservationDetail', {
      reservationId
    });
  }

  render() {
    const { reservations } = this.state;

    return(
      [
        <FlatList
          key="reservationsList"
          style={styles.list}
          data={reservations}
          renderItem={({ item }) => {
            return <ReservationCard reservation={item} onPress={this.onReservationDetailSelect}/>
          }}
          keyExtractor={(reservation : ReservationType) => reservation.id}
        />,
        <ActionButton
          key="addReservation"
          onPress={this.handleAddReservation}
          buttonColor="rgba(231, 76, 60, 1)"
        />
    
      ]
        
      
    )
  }
}

export default Reservations;