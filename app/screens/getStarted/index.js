import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { bgImg, logoImg } from "@/app/assets/images";
import { ImgApps, BtnApps } from "@/app/components";
// import { ColorApps } from "../../utils";

const GetStartedScreen = () => {
  return (
    <ImageBackground source={bgImg} style={Styles.container}>
      <View>
        <ImgApps imgSrc={logoImg} />
        <Text style={Styles.font}>
          Konsultasi dengan{"\n"}dokter jadi lebih{"\n"}mudah & fleksibel
        </Text>
        <BtnApps />
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },

  font: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "semibold",
  },

  btn: {
    backgroundColor: "red",
  },
});
