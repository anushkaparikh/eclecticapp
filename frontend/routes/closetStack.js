import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import MyClosetScreen from '../screens/MyCloset';
import UploadScreen from '../screens/Upload';

import ClosetHeader from '../components/ClosetHeader';
import UploadHeader from '../components/UploadHeader';

const screens = {
  MyCloset: {
    screen: MyClosetScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: null,
        headerTitle: () => <ClosetHeader navigation={navigation} />,
      };
    },
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: null,
        headerTitle: () => <UploadHeader navigation={navigation} />,
      };
    },
  },
};

const ClosetStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#F0EBE8',
      height: 80,
    },
  },
});

const ClosetStackApp = createAppContainer(ClosetStack);

export default ClosetStackApp;
