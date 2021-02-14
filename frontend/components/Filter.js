import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import FilterCategory from '../components/FilterCategory';
import FilterColor from '../components/FilterColor';
import FilterStyle from '../components/FilterStyle';
import FilterOccassion from '../components/FilterOccassion';
import FilterSeason from '../components/FilterSeason';

const Filter = () => {
  const [open, setOpen] = useState(0);
  const [openCatergory, setOpenCatergory] = useState(0);
  const [openColor, setOpenColor] = useState(0);
  const [openStyle, setOpenStyle] = useState(0);
  const [openOccassion, setOpenOccassion] = useState(0);
  const [openSeason, setOpenSeason] = useState(0);
  const onPressFilter = () => {
    bottomSheetRef.current.snapTo(open);
    if (open == 0) {
      setOpen(1);
    } else {
      setOpen(0);
    }
  };
  const onPressCategory = () => {
    if (openCatergory == 0) {
      setOpenCatergory(1);
    } else {
      setOpenCatergory(0);
    }
  };
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
  const renderContent = () => (
    <View style={styles.sheetContainer}>
      <TouchableOpacity onPress={onPressFilter} style={styles.topContainer}>
        <Text style={styles.textButton}>Filter</Text>
      </TouchableOpacity>
      <ScrollView>
        <TouchableOpacity
          onPress={onPressCategory}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Category</Text>
        </TouchableOpacity>
        {openCatergory ? <FilterCategory /> : null}
        <TouchableOpacity
          onPress={onPressColor}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Color</Text>
        </TouchableOpacity>
        {openColor ? <FilterColor /> : null}
        <TouchableOpacity
          onPress={onPressStyle}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Style</Text>
        </TouchableOpacity>
        {openStyle ? <FilterStyle /> : null}
        <TouchableOpacity
          onPress={onPressOccassion}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Occassion</Text>
        </TouchableOpacity>
        {openOccassion ? <FilterOccassion /> : null}
        <TouchableOpacity
          onPress={onPressSeason}
          style={styles.optionsContainer}>
          <Text style={styles.textButton}>Season</Text>
        </TouchableOpacity>
        {openSeason ? <FilterSeason /> : null}
      </ScrollView>
    </View>
  );

  const bottomSheetRef = React.createRef();
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[450, 30]}
      renderContent={renderContent}
      initialSnap={1}
      enabledGestureInteraction={false}
    />
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: '#F0EBE8',
    height: 450,
    width: '100%',
    alignSelf: 'center',
  },
  topContainer: {
    backgroundColor: '#D1C5BC',
    top: 0,
    height: 30,
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  optionsContainer: {
    backgroundColor: '#C4C4C4',
    alignSelf: 'center',
    top: 0,
    marginTop: 10,
    height: 30,
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

export default Filter;
