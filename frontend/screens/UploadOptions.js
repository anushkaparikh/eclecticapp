import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import UploadColor from '../components/UploadColor';
import UploadStyle from '../components/UploadStyle';
import UploadOccassion from '../components/UploadOccassion';
import UploadSeason from '../components/UploadSeason';

const UploadOptions = ({navigation}) => {
  const [openColor, setOpenColor] = useState(0);
  const [openStyle, setOpenStyle] = useState(0);
  const [openOccassion, setOpenOccassion] = useState(0);
  const [openSeason, setOpenSeason] = useState(0);
  const onPressColor = () => {
    if (openColor == 0) {
      setOpenColor(1);
    } else {
      setOpenColor(0);
    }
  };
  const onPressStyle = () => {
    if (openStyle == 0) {
      setOpenStyle(1);
    } else {
      setOpenStyle(0);
    }
  };
  const onPressOccassion = () => {
    if (openOccassion == 0) {
      setOpenOccassion(1);
    } else {
      setOpenOccassion(0);
    }
  };
  const onPressSeason = () => {
    if (openSeason == 0) {
      setOpenSeason(1);
    } else {
      setOpenSeason(0);
    }
  };
  return (
    <View style={styles.upload_screenContainer}>
      <Image style={styles.image} source={{uri: navigation.getParam('pic')}} />
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          onPress={onPressColor}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Color</Text>
        </TouchableOpacity>
        {openColor ? <UploadColor /> : null}
        <TouchableOpacity
          onPress={onPressStyle}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Style</Text>
        </TouchableOpacity>
        {openStyle ? <UploadStyle /> : null}
        <TouchableOpacity
          onPress={onPressOccassion}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Occassion</Text>
        </TouchableOpacity>
        {openOccassion ? <UploadOccassion /> : null}
        <TouchableOpacity
          onPress={onPressSeason}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Season</Text>
        </TouchableOpacity>
        {openSeason ? <UploadSeason /> : null}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  upload_screenContainer: {
    flex: 1,
    backgroundColor: '#E3DDD9',
    paddingTop: 10,
  },
  scrollContainer: {
    width: '100%',
    marginTop: 20,
    backgroundColor: '#F0EBE8',
    alignSelf: 'center',
    position: 'relative',
    flex: 1,
    paddingBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  optionsContainer: {
    backgroundColor: '#E3CBCB',
    alignSelf: 'center',
    top: 0,
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
    position: 'relative',
    width: '95%',
  },
  textButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'relative',
    fontSize: 16,
    color: '#000',
  },
});

export default UploadOptions;
