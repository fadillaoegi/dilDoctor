import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";

const BtnApps = ({ type, onPress, title = "Click" }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={Styles.container(type)}>
        <Text style={Styles.fonts(type)}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default BtnApps;

const Styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "btn-primary" ? "#0BCAD4" : "#FFFFFF",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
  }),
  fonts: (type) => ({
    color: type === "btn-primary" ? "#FFFFFF" : "#112340",
    fontWeight: "semibold",
    fontSize: 18,
  }),
  //   fonts: (type) => ({
  //     fontSize: 18,
  //     fontWeight: "semibold",
  //     colo,
  //   }),
});
