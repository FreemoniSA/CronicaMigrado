import React from "react";
import { View, Text } from "react-native";
import styles from "./styles"
const BoxUsageCronipesos = ({ list }) => {
  return (
    <View style={styles.container}>
      <View style={styles.questionTextContainer}>
        <Text style={styles.questionText}>¿Cómo usar este regalo?</Text>
      </View>
      <View style={styles.listContainer}>
        {list &&
          list.map((item, idx) => (
            <View style={styles.listTextContainer} key={idx}>
              <Text style={styles.listTextIdx}>{idx + 1}. </Text>
              <Text style={styles.listText}>{item}</Text>
            </View>
          ))}
      </View>
    </View>
  );
};

export default BoxUsageCronipesos;
