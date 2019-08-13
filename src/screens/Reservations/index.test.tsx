import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ReservationDetail from './index';

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

const navigationProp = {
  navigate: (to: string, options?: object) => { console.log('Navigating') },
  getParam: (param: string) => { return '1' },
  addListener: (listenEvent: string, payload: object) => {}
}

describe('Reservations', () => {

  it('should render correctly', () => {
    renderer.create(<ReservationDetail navigation={navigationProp} />);
  })
})