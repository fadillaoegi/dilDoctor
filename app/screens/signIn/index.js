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
        <Text style={Styles.title}>Masuk dan mulai{"\n"}berkonsultasi</Text>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 40,
    backgroundColor: "white",
  },
  title: {
    color: "",
    fontSize: 20.0,
    fontFamily: "nunito",
    fontWeight: "400",
  },
});
