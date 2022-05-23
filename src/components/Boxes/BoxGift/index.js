import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxGift = ({ data }) => {
  const { type } = data;
  return (
    <View style={styles.container}>
      <View style={{ width: "40%" }}>
        <Text style={[styles.store, type === "black" && styles.themeBlack]}>
          {data.posData.name}
        </Text>
        <Text style={[styles.storeType, type === "black" && styles.themeBlack]}>
          {data.posData.area}
        </Text>
      </View>
      <View style={styles.separator}></View>
      <View style={{ width: "40%" }}>
        <Text style={[styles.balance, type === "black" && styles.themeBlack]}>
          c$ {data.discount}
        </Text>
        <Text style={[styles.minAmount, type === "black" && styles.themeBlack]}>
          A partir de: ${data.minAmount}
        </Text>
      </View>
    </View>
  );
};

export default BoxGift;
