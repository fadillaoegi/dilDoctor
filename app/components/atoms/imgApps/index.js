import { Image } from "react-native";
import React from "react";

const ImgApps = ({ height = 100, width = 100, imgSrc }) => {
  return <Image source={imgSrc} style={{ height: height, width: width }} />;
};

export default ImgApps;
