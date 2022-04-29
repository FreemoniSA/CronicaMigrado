import React from "react";
import { View, Text } from "react-native";
import Img from "../Img";
import styles from "./styles";

const Card = ({ srcImg, description, horizontal }) => {
  return (
    <View style={[styles.container, horizontal && styles.horizontal]}>
      <Img srcImg={srcImg} />
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

export default Card;
