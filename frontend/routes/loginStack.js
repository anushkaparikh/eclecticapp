import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
import HomeScreen from '../screens/Home';
import Header from '../components/Header';

const screens = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const LoginStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    initialRouteName: 'Login',
    headerStyle: {
      backgroundColor: '#F0EBE8',
      height: 80,
    },
  },
});

const LoginStackApp = createAppContainer(LoginStack);

export default LoginStackApp;
