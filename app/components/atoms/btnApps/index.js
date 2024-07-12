import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";

const BtnApps = ({ type, onPress, title = "test" }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={Styles.container(type)}>
        <Text>{title}</Text>
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
});
