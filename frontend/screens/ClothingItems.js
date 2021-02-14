import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Picker,
} from "react-native";

import DropDown from "../components/ClothingDropDown";

const ClothingItems = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.header}>{navigation.getParam("company")}</Text>
      <Text style={styles.paragraphItem}>
        {navigation.getParam("description")}
      </Text>
      <Text style={styles.priceItem}>{navigation.getParam("price")}</Text>
      <Image style={styles.imageItem} source={navigation.getParam("pic")} />
      <DropDown />
      <TouchableOpacity onPress={pressHandler} style={styles.item_button}>
        <Text style={styles.item_button_text}>Return to Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#E3DDD9",
    padding: 10,
  },
  header: {
    justifyContent: "center",
    alignSelf: "center",
    position: "relative",
    top: 10,
    fontSize: 22,
    color: "#000000",
  },
  paragraphItem: {
    textAlign: "center",
    position: "relative",
    fontSize: 16,
    marginTop: 30,
    color: "#000000",
  },
  priceItem: {
    textAlign: "center",
    position: "relative",
    fontSize: 14,
    marginVertical: 10,
    color: "#000000",
  },
  imageItem: {
    width: 200,
    height: 300,
    borderRadius: 10,
    position: "relative",
    alignSelf: "center",
  },
  item_button: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "column",
    marginTop: 15,
    padding: 2,
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#AEABAB",
  },
  item_button_text: {
    alignSelf: "center",
    position: "relative",
    fontSize: 20,
    color: "#FFF",
    marginVertical: 5,
  },
});

export default ClothingItems;
