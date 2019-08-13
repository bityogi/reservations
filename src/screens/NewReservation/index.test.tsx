import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import { shallow } from 'enzyme';
import NewReservation from './index';

jest.mock("NativeModules", () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {}
    })
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {}
  }
}));


jest.mock('../../util/requests');
jest.mock('./queries');



const navigationProp = {
    navigate: (to: string, options?: object) => { console.log('Navigating') },
    getParam: (param: string) => { return '1' },
    addListener: (listenEvent: string, payload: object) => {}
}

describe('NewReservation', () => {
  it('renders correctly', () => {
    const component = shallow(<NewReservation navigation={navigationProp} />);
    expect(component).toMatchSnapshot();
  })
})