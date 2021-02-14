import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

const Upload = ({navigation}) => {
  const [image, setImage] = useState('');

  const selectfromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
  };
  const takePhoto = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setImage(image.path);
    });
  };
  const nextPressHandler = () => {
    if (image == '') {
      return alert('No Image Selected');
    }
    navigation.navigate('UploadCategory', {
      pic: image,
    });
  };
  return (
    <View style={styles.upload_screenContainer}>
      <Text style={styles.upload_header}>Upload</Text>
      <TouchableOpacity onPress={takePhoto} style={styles.cameraContainer}>
        <ImageBackground
          style={styles.cameraBackground}
          source={require('../images/cameraButton.png')}>
          <Image source={{uri: image}} style={styles.cameraBackground} />
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={selectfromLibrary} style={styles.uploadButton}>
        <Text style={styles.textButton}>Upload from Camera Roll</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nextPressHandler} style={styles.nextButton}>
        <Text style={styles.textButton}>Next</Text>
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
    fontSize: 32,
    color: '#000000',
    marginBottom: 20,
  },
  cameraBackground: {
    flex: 1,
  },
  cameraContainer: {
    alignSelf: 'center',
    position: 'relative',
    width: 400,
    height: 400,
    marginVertical: 20,
  },
  uploadButton: {
    backgroundColor: '#F0EBE8',
    alignSelf: 'center',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    position: 'relative',
    width: '90%',
  },
  nextButton: {
    backgroundColor: '#F0EBE8',
    alignSelf: 'center',
    marginTop: 10,
    left: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    position: 'relative',
    width: 100,
  },
  textButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
    fontSize: 16,
    color: '#000',
  },
});

export default Upload;
