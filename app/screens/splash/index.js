import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Spacing, ImgApps } from "../../components";
import { logoImg } from "../../assets/images";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStartedScreen");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImgApps imgSrc={logoImg} height={75} width={86} />
      <Spacing />
      <Text style={styles.font}>DilDoctor</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  font: {
    fontSize: 18,
    fontWeight: "500",
    color: "#112340",
  },
});
