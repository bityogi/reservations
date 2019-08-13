import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { formatDate } from '../../util';
import { NavigationProp } from '../../util/types';
import { addNewReservation } from './queries';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 0.5,
  },
});

interface NewReservationState {
  name: string,
  hotelName: string,
  arrivalDate: Date,
  departureDate: Date,
  showArrivalDatePicker: boolean,
  showDepartureDatePicker: boolean
}

class NewReservation extends PureComponent<NavigationProp, NewReservationState> {
  static navigationOptions = {
    title: 'New Reservation'
  };

  state = {
    name: '',
    hotelName: '',
    arrivalDate: new Date(),
    departureDate: new Date(),
    showArrivalDatePicker: false,
    showDepartureDatePicker: false,
  }

  handlePress = () => {
    const { 
      name, 
      hotelName, 
      arrivalDate, 
      departureDate 
    } = this.state;
    
    const inputValues = {
      name,
      hotelName,
      arrivalDate: formatDate(arrivalDate),
      departureDate: formatDate(departureDate)
    }
    addNewReservation(inputValues)
      .then(reservation => {
        const { navigation } = this.props;
        navigation.navigate('ReservationDetail', {
          reservationId: reservation.id,
          refresh: true
        })
      })
      .catch(error => {
        console.error('Error occured while adding new reservation: ', error);
      });
    
  }

  handleArrivalDatePicked = (date: Date) => {
    this.setState({ 
      arrivalDate: date,
      showArrivalDatePicker: false,
    });
  }

  handleDepartureDatePicked = (date: Date) => {
    this.setState({
      departureDate: date,
      showDepartureDatePicker: false,
    })
  }

  render() {
    const { 
      name, 
      hotelName, 
      arrivalDate, 
      departureDate,
      showArrivalDatePicker,
      showDepartureDatePicker,
    } = this.state;

    const isValid = (name && hotelName && arrivalDate && departureDate);

    return (
      <View style={styles.container}>
        <View style={styles.fieldContainer}>
          <TextInput 
            style={styles.text}
            placeholder='Name on Reservation'
            spellCheck={false}
            onChangeText={(value) => this.setState({ name: value })}
            value={name}
          />
          <TextInput 
            style={[styles.text, styles.borderTop]}
            placeholder='Hotel Name'
            spellCheck={false}
            onChangeText={(value) => this.setState({ hotelName: value })}
            value={hotelName}
          />
          <TextInput 
            style={[styles.text, styles.borderTop]}
            placeholder='Arrival Date'
            spellCheck={false}
            onChangeText={(value) => this.setState({ arrivalDate: new Date(value) })}
            value={formatDate(arrivalDate)}
            editable={!showArrivalDatePicker}
            onFocus={() => this.setState({ showArrivalDatePicker: true })}
          />
          <TextInput 
            style={[styles.text, styles.borderTop]}
            placeholder='Departure Date'
            spellCheck={false}
            onChangeText={(value) => this.setState({ departureDate: new Date(value) })}
            value={formatDate(departureDate)}
            editable={!showDepartureDatePicker}
            onFocus={() => this.setState({ showDepartureDatePicker: true })}
          />
          <DateTimePicker
            isVisible={showArrivalDatePicker}
            mode="date"
            onConfirm={this.handleArrivalDatePicked}
            onCancel={() => this.setState({ showArrivalDatePicker: false })}
          />
          <DateTimePicker
            isVisible={showDepartureDatePicker}
            mode="date"
            onConfirm={this.handleDepartureDatePicked}
            onCancel={() => this.setState({ showDepartureDatePicker: false })}
          />
        </View>
        <TouchableHighlight
          onPress={this.handlePress}
          style={styles.button}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>New Reservation</Text>
        </TouchableHighlight>
        
      </View>
      
    )
  }
}

export default NewReservation;