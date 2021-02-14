import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from '../screens/Home';
import NewArrivalScreen from '../screens/NewArrivals';
import OotdScreen from '../screens/Ootd';
import NewsScreen from '../screens/News';
import DiscoverScreen from '../screens/Discover';
import ClothingItemScreen from '../screens/ClothingItems';
import NewsItemsScreen from '../screens/ArticleItem';

import Header from '../components/Header';

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  NewArrivals: {
    screen: NewArrivalScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  Ootd: {
    screen: OotdScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  News: {
    screen: NewsScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  Discover: {
    screen: DiscoverScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  ClothingItem: {
    screen: ClothingItemScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  NewsItem: {
    screen: NewsItemsScreen,
    navigationOptions: ({navigation}) => {
      return {
        headerLeft: () => null,
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#F0EBE8',
      height: 80,
    },
  },
});

const HomeStackApp = createAppContainer(HomeStack);

export default HomeStackApp;
