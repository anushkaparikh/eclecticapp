import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import UploadScreen from '../screens/Upload';
import UploadCategoryScreen from '../screens/UploadCategory';
import UploadOptionsScreen from '../screens/UploadOptions';

import UploadHeader from '../components/UploadHeader';

const screens = {
  Upload: {
    screen: UploadScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: null,
        headerTitle: () => <UploadHeader navigation={navigation} />,
      };
    },
  },
  UploadCategory: {
    screen: UploadCategoryScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: null,
        headerTitle: () => <UploadHeader navigation={navigation} />,
      };
    },
  },
  UploadOptions: {
    screen: UploadOptionsScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: null,
        headerTitle: () => <UploadHeader navigation={navigation} />,
      };
    },
  },
};

const UploadStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#F0EBE8',
      height: 80,
    },
  },
});

const UploadStackApp = createAppContainer(UploadStack);

export default UploadStackApp;
