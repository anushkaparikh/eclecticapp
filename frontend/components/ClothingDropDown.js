import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  Picker,
} from "react-native";

class ClothingDropDown extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
    };
  }
  Show = (value) => {
    this.setState({ selected: value });
  };
  PressHandler = () => {
    if (this.state.selected == 0) {
      alert("Select a Size");
    } else {
      alert("Add to Cart");
    }
  };
  render() {
    return (
      <View>
        <Picker
          style={styles.item_dropdown}
          selectedValue={this.state.selected}
          onValueChange={this.Show.bind()}
        >
          <Picker.Item label="Select a Size" value="0"></Picker.Item>
          <Picker.Item label="Small" value="1"></Picker.Item>
          <Picker.Item label="Medium" value="2"></Picker.Item>
          <Picker.Item label="Large" value="3"></Picker.Item>
        </Picker>
        <TouchableOpacity
          onPress={this.PressHandler}
          style={styles.item_button}
        >
          <Text style={styles.item_button_text}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  item_dropdown: {
    alignSelf: "center",
    width: "80%",
    flexDirection: "column",
    marginTop: 15,
    padding: 2,
    justifyContent: "center",
    position: "relative",
  },
});

export default ClothingDropDown;
