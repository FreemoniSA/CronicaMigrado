import React from "react";
import { View, Text } from "react-native";
import Img from "../Img";
import styles from "./styles";

const Card = ({
  srcImg,
  size,
  description,
  horizontal,
  width,
  shadow,
  borderRound,
  children,
}) => {
  return (
    <View
      style={[
        styles.container,
        horizontal && styles.horizontal,
        shadow && styles.shadow,
        borderRound && styles.borderRound,
        width && styles[width]
      ]}
    >
      <Img srcImg={srcImg} size={size} />
      {description && (
        <View>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
      {children}
    </View>
  );
};

export default Card;
