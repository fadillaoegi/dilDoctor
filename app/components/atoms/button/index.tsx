import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ButtonApps = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        color="red"
        onPress={() => alert("Button Pressed")}
      />
    </View>
  );
};

export default ButtonApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
