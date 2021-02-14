import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const ClosetItem = ({ pic }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed")}
      style={styles.item}
    >
      <Image style={styles.item} source={pic} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 170,
    height: 170,
    position: "relative",
    margin: 3,
  },
});

export default ClosetItem;
