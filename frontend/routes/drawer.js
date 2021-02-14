import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import LoginStack from './loginStack';
import HomeStack from './homeStack';
import NAStack from './naStack';
import DiscoverStack from './discoverStack';
import NewsStack from './newsStack';
import MyClosetStack from './closetStack';
import UploadStack from './uploadStack';

const stack = {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    },
  },
  Login: {
    screen: LoginStack,
  },
  NewArrivals: {
    screen: NAStack,
    navigationOptions: {
      title: 'New Arrivals',
    },
  },
  Discover: {
    screen: DiscoverStack,
  },
  MyCloset: {
    screen: MyClosetStack,
    navigationOptions: {
      title: 'My Closet',
    },
  },
  News: {
    screen: NewsStack,
    navigationOptions: {
      title: 'Fashion News',
    },
  },
  Upload: {
    screen: UploadStack,
    navigationOptions: {
      title: 'Upload',
    },
  },
};

const drawerStyle = {
  intialRouteName: 'Home',
  contentOptions: {
    activeTintColor: '#000',
    itemStyle: {
      flexDirection: 'column',
    },
    itemsContainerStyle: {
      marginVertical: 0,
    },
  },
  drawerBackgroundColor: '#DAC2C2',
};

const RootDrawerNavigator = createDrawerNavigator(stack, drawerStyle);

export default createAppContainer(RootDrawerNavigator);
