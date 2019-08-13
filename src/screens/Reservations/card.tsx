import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';

import { formatDate } from '../../util';
import { ReservationType } from '../../util/types'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 6,
    // borderColor: '#48BBEC',
    // borderWidth: 0.5,
  },
  name: {
    fontSize: 30,
    fontWeight: '500'
  },
  hotelName: {
    fontSize: 20,
    color: '#bdbdbd'
  },
  datesContainer: {

  },
  dates: {

  }
})

interface CardProps {
  reservation: ReservationType,
  onPress: (id: string) => void
}

const ReservationCard = ({ reservation, onPress }: CardProps) => {
  const { name, hotelName, arrivalDate, departureDate } = reservation;
  return (
    <TouchableHighlight onPress={() => onPress(reservation.id)}>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hotelName}>{hotelName}</Text>
        <View style={styles.datesContainer}>
          <Text style={styles.dates}>{`${formatDate(arrivalDate)} to ${formatDate(departureDate)}`}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hotelName: PropTypes.string.isRequired,
    arrivalDate: PropTypes.instanceOf(Date),
    departureDate: PropTypes.instanceOf(Date),
  })
}

export default ReservationCard;