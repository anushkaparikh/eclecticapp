import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";

import ClosetItem from "../components/ClosetItem";
import Filter from "../components/Filter";

const MyCloset = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>My Closet</Text>
      <ScrollView>
        <View style={styles.itemContainer}>
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
          <ClosetItem pic={require("../images/blueShirt.png")} />
        </View>
      </ScrollView>
      <Filter />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E3DDD9",
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "#E3DDD9",
    justifyContent: "center",
    top: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  header: {
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    top: 10,
    fontSize: 32,
    color: "#000000",
    marginBottom: 10,
  },
});

export default MyCloset;
