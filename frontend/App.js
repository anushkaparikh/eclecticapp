import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView, StyleSheet, ScrollView, View, Text} from 'react-native';

import Navigator from './routes/drawer';

const App: () => React$Node = () => {
  return (
    <View style={styles.app_screenContainer}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  app_screenContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
