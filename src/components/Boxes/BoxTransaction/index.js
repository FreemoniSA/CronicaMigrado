import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxTransaction = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ width:"50%" }}>
        <Text style={styles.desc}>{data.desc}</Text>
        <Text style={styles.date}>{data.date}</Text>
      </View>
      <View style={{ width:"30%" }}>
        <Text style={styles.balance}>{data.balance}</Text>
      </View>
    </View>
  );
};

export default BoxTransaction;