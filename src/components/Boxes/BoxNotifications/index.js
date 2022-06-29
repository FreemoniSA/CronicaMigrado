import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import moment from "moment";
import "moment/locale/es";
const BoxNotifications = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.desc}>{data.message}</Text>
      <Text style={styles.date}>
      {moment(data.date).locale("es").startOf("hora").fromNow()}
      </Text>
    </View>
  );
};

export default BoxNotifications;
