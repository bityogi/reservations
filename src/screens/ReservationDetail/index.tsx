import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { HeaderBackButton } from 'react-navigation';
import { isEmpty } from 'lodash';

import { getReservation } from './queries';
import { formatDate } from '../../util';
import { ReservationType, NavigationProp } from '../../util/types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  data: {
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
  },
  hotelName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#bdbdbd'
  },
  date: {
    fontSize: 15,
    fontWeight: '300'
  }
})

interface ReservationDetailState {
  reservation: ReservationType | {}
}

class ReservationDetail extends PureComponent<NavigationProp, ReservationDetailState> {
  static navigationOptions = ({ navigation } : NavigationProp) => {
    return {
      title: 'Reservation Detail',
      headerLeft:(<HeaderBackButton onPress={() => navigation.navigate('Reservations', { refresh: true })}/>)
    }
  };

  state = {
    reservation: {}
  }
  

  componentDidMount() {
    const { navigation } = this.props;
    const reservationId = navigation.getParam('reservationId')

    if (reservationId) {
      getReservation(reservationId)
        .then(reservation => {
          this.setState({ reservation })
        })
    }
  }

  render() {
    const { reservation } = this.state;

    if (isEmpty(reservation)) {
      return null
    }
    
    return (
      <View style={styles.container}>
        <Text style={[styles.data, styles.name]}>{(reservation as ReservationType).name}</Text>
        <Text style={[styles.data, styles.hotelName]}>{(reservation as ReservationType).hotelName}</Text>
        <Text style={[styles.data, styles.date]}>{formatDate((reservation as ReservationType).arrivalDate)}</Text>
        <Text style={[styles.data, styles.date]}>{formatDate((reservation as ReservationType).departureDate)}</Text>
      </View>
    )
  }
}

export default ReservationDetail;