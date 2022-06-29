import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SHOP_AREAS from "../../../utils/constants/shopAreas";
const BoxGiftHeader = ({ data }) => {
  const { type } = data;
  return (
    <View style={styles.container}>
      <Text style={[styles.store, type === "black" && styles.themeBlack]}>
        {data.name}
      </Text>
      <Text style={[styles.storeType, type === "black" && styles.themeBlack]}>
        {SHOP_AREAS[data.area]}
      </Text>
    </View>
  );
};

export default BoxGiftHeader;
