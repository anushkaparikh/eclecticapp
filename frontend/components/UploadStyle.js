import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const UploadStyle = () => {
  return (
    <View>
      <ImageBackground
        source={require('../images/styleFilter.png')}
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
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default UploadStyle;
