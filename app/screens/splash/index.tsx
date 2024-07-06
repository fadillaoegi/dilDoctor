import React from "react";
import { ImageBackground, View, Text } from "react-native";
import { bg } from "../../assets";

const SplashScreen = () => {
  return (
    <ImageBackground source={bg} resizeMode="cover">
      <View>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
