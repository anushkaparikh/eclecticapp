import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

const MidAppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.midButtonContainer}>
    <ImageBackground
      style={styles.midButtonImage}
      source={require('../images/midbutton.png')}>
      <Text style={styles.midButtonText}>{title}</Text>
    </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  midButtonContainer: {
    marginHorizontal: 10,
    elevation: 8,
    backgroundColor: '#C4C4C4',
    borderRadius: 25,
    width: 177,
    height: 125,
  },
  midButtonImage: {
    width: 177,
    height: 125,
  },
  midButtonText: {
    fontSize: 32,
    color: '#000000',
    alignSelf: 'center',
    marginVertical: 35,
  },
});

export default MidAppButton;
