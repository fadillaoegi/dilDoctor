import React from "react";
import { ImageBackground, Text, View, StyleSheet } from "react-native";
import { bg } from "./assets/";
import { SplashScreen } from "expo-router";

export default function Index() {
  return (
    // <ImageBackground source={bg} style={styles.background} resizeMode="cover">
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
    // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff", // Warna teks putih agar terlihat di atas gambar
    fontSize: 16,
  },
});
