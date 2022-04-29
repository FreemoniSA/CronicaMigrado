import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const Img = ({ srcImg }) => {
  return <Image source={srcImg} style={styles.img}/>;
};

export default Img;
