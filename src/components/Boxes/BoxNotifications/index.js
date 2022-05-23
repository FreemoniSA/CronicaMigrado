import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
const BoxNotifications = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.message}</Text>
      <Text style={styles.date}>{data.date}</Text>
    </View>
  );
};

export default BoxNotifications;
