import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { ImgApps, Spacing } from "@/app/components";
import { logoImg } from "@/app/assets/images";

const SignInScreen = () => {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <ImgApps imgSrc={logoImg} />
        <Spacing height={40} />
        <Text>Masuk dan mulai{"\n"}berkonsultasi</Text>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const Styles = StyleSheet.create({
  container: {
    width: "auto",
    height: "auto",
    padding: 40,
    backgroundColor: "#ffffff",
  },
  title: {
    color: ""
  }
});
