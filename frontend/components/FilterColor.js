import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const FilterColor = () => {
  return (
    <View>
      <ImageBackground
        source={require('../images/colorFilter.png')}
        style={styles.imageFilter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: 'white',
    height: 450,
    width: '100%',
    alignSelf: 'center',
  },
  imageFilter: {
    width: '95%',
    height: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default FilterColor;
