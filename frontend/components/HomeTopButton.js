import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

const TopAppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.outButtonContainer}>
    <ImageBackground
      style={styles.outButtonImage}
      source={require('../images/newArrButton.png')}>
      <Text style={styles.outButtonText}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outButtonContainer: {
    elevation: 8,
    backgroundColor: '#C4C4C4',
    borderRadius: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 265,
    width: 374,
  },
  outButtonImage: {
    height: 270,
    width: 374,
    justifyContent: 'center',
  },
  outButtonText: {
    fontSize: 45,
    color: '#000000',
    alignSelf: 'center',
  },
});

export default TopAppButton;
