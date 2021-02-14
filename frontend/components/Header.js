import React from "react";
import { StyleSheet, TouchableOpacity, Image, View } from "react-native";

export default function Header({ navigation }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  const homeMenu = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={openMenu} style={styles.sideBar}>
        <Image
          style={styles.sideBar}
          source={require("../images/menuIcon.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={homeMenu} style={styles.logo_touch}>
        <Image
          style={styles.logo}
          source={require("../images/EclecticLogo.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => console.log("Pressed")}
        style={styles.search}
      >
        <Image
          style={styles.search}
          source={require("../images/searchIcon.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  sideBar: {
    width: 30,
    height: 25,
    justifyContent: "center",
    left: 5,
    position: "absolute",
  },
  logo_touch: {
    backgroundColor: "#FFF",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignSelf: "center",
    left: "43%",
    top: -30,
    position: "absolute",
  },
  logo: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },
  search: {
    width: 25,
    height: 25,
    justifyContent: "center",
    right: 5,
    position: "absolute",
  },
});
