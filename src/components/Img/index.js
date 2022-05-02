import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const Img = ({ srcImg, size }) => {
  return (
    <Image source={srcImg} style={[styles.medium, size && styles[size]]} />
  );
};

export default Img;
