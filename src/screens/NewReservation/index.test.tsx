import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
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

// jest.mock('react-native-gesture-handler', () => {
//   const View = require('react-native/Libraries/Components/View/View');
//   return {
//     Swipeable: View,
//     DrawerLayout: View,
//     State: {},
//     ScrollView: View,
//     Slider: View,
//     Switch: View,
//     TextInput: View,
//     ToolbarAndroid: View,
//     ViewPagerAndroid: View,
//     DrawerLayoutAndroid: View,
//     WebView: View,
//     NativeViewGestureHandler: View,
//     TapGestureHandler: View,
//     FlingGestureHandler: View,
//     ForceTouchGestureHandler: View,
//     LongPressGestureHandler: View,
//     PanGestureHandler: View,
//     PinchGestureHandler: View,
//     RotationGestureHandler: View,
//     /* Buttons */
//     RawButton: View,
//     BaseButton: View,
//     RectButton: View,
//     BorderlessButton: View,
//     /* Other */
//     FlatList: View,
//     gestureHandlerRootHOC: jest.fn(),
//     Directions: {},
//   };
// });

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

const navigationProp = {
    navigate: (to: string, options?: object) => { console.log('Navigating') }
}

describe('NewReservation', () => {
  it('renders correctly', () => {
    const props = createTestProps({});
    renderer.create(<NewReservation navigation={navigationProp} />);
    console.log('Rendering for new reservation....')
  })
})