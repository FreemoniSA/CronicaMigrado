import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxGift = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ width:"40%" }}>
        <Text style={styles.store}>{data.store}</Text>
        <Text style={styles.storeType}>{data.storeType}</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={{ width:"40%" }}>
        <Text style={styles.balance}>{data.balance}0</Text>
        <Text style={styles.minAmount}>{data.minAmount}</Text>
      </View>
    </View>
  );
};

export default BoxGift;
