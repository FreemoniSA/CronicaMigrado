import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxTransaction = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "50%" }}>
        <Text style={styles.desc}>{data.subject}</Text>
        <Text style={styles.date}>{new Date(data.createdAt).toLocaleDateString()}</Text>
      </View>
      <View style={{ width: "30%" }}>
        <Text style={[styles.balance, data.amount > 0 && styles.greenBalance]}>
          {`${data.amount > 0 ? "+" : "-"}`} c${data.amount}
        </Text>
      </View>
    </View>
  );
};

export default BoxTransaction;
