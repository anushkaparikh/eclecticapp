import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const UploadCategory = ({navigation}) => {
  const pressHandler = () => {
    navigation.navigate('UploadOptions', {
      pic: navigation.getParam('pic'),
    });
  };
  return (
    <View style={styles.upload_screenContainer}>
      <Text style={styles.upload_header}>
        What would you like to start with?
      </Text>
      <TouchableOpacity style={styles.imageFilter} onPress={pressHandler}>
        <ImageBackground
          source={require('../images/categoryUpload.png')}
          style={styles.imageFilter}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upload_screenContainer: {
    flex: 1,
    backgroundColor: '#E3DDD9',
    padding: 10,
  },
  upload_header: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
    top: 10,
    fontSize: 18,
    color: '#000000',
    marginBottom: 20,
  },
  imageFilter: {
    width: '95%',
    height: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
});

export default UploadCategory;
