import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
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
  theme = "white",
  onPress
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          horizontal && styles.horizontal,
          shadow && styles.shadow,
          borderRound && styles.borderRound,
          width && styles[width],
          theme && styles[theme],
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
    </TouchableWithoutFeedback>
  );
};

export default Card;
