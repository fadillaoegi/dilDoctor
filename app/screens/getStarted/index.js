import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { bgImg, logoImg } from "@/app/assets/images";
import { ImgApps, BtnApps, Spacing } from "@/app/components";
import { useNavigation } from "@react-navigation/native";

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImg} style={Styles.container}>
      <View style={Styles.container}>
        <View>
          <ImgApps imgSrc={logoImg} />
          <Spacing height={40} />
          <Text style={Styles.font}>
            Konsultasi dengan{"\n"}dokter jadi lebih{"\n"}mudah & fleksibel
          </Text>
        </View>
        <View>
          <BtnApps
            type={"btn-primary"}
            onPress={() => navigation.navigate("SignUpScreen")}
            title="Get Started"
          />
          <Spacing />
          <BtnApps
            onPress={() => navigation.navigate("SignInScreen")}
            title="Sign In"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
    justifyContent: "space-between",
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
