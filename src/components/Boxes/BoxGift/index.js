import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxGift = ({ data }) => {
  const { type } = data;
  return (
    <View style={styles.container}>
      <View style={{ width: "40%" }}>
        <Text style={[styles.store, type === "black" && styles.themeBlack]}>
          {data.store}
        </Text>
        <Text style={[styles.storeType, type === "black" && styles.themeBlack]}>
          {data.storeType}
        </Text>
      </View>
      <View style={styles.separator}></View>
      <View style={{ width: "40%" }}>
        <Text style={[styles.balance, type === "black" && styles.themeBlack]}>
          {data.balance}
        </Text>
        <Text style={[styles.minAmount, type === "black" && styles.themeBlack]}>
          {data.minAmount}
        </Text>
      </View>
    </View>
  );
};

export default BoxGift;
