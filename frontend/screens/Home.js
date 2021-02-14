import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import HomeMidButton from '../components/HomeMidButton';
import HomeTopButton from '../components/HomeTopButton';
import HomeBotButton from '../components/HomeBotButton';

const Separator = () => (
  <View style={styles.separator}>
    <Text style={styles.home_separator_text}>Empty Space</Text>
  </View>
);

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const Home = ({navigation}) => {
  const NApressHandler = () => {
    navigation.navigate('NewArrivals');
  };
  const OotdpressHandler = () => {
    navigation.navigate('Ootd');
  };
  const NewspressHandler = () => {
    navigation.navigate('News');
  };
  const DiscoverpressHandler = () => {
    navigation.navigate('Discover');
  };
  return (
    <View style={styles.home_screenContainer}>
      <HomeTopButton title="New Arrivals" onPress={NApressHandler} />
      <Separator />
      <View style={{flexDirection: 'row'}}>
        <HomeMidButton title="#ootd" onPress={OotdpressHandler} />
        <HomeMidButton title="News" onPress={NewspressHandler} />
      </View>
      <Separator />
      <HomeBotButton title="Discover" onPress={DiscoverpressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  home_screenContainer: {
    flex: 1,
    backgroundColor: '#E3DDD9',
    paddingTop: 30,
  },
  home_separator: {
    backgroundColor: '#E3DDD9',
  },
  home_separator_text: {
    fontSize: 10,
    color: '#E3DDD9',
  },
});

export default Home;
