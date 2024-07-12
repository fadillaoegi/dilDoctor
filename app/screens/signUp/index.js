import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ImgApps, Spacing } from "@/app/components";
import { logoImg } from "@/app/assets/images";

const SignUpScreen = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Text>SignUpScreen</Text>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const Styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    padding: 40,
    backgroundColor: "#ffffff",
  },
});
