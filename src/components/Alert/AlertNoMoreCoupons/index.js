import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const AlertNoMoreCoupons = ({ setAlertCoupons }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡No hay regalos disponibles!</Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={() => setAlertCoupons(false)}>
          <View>
            <Text style={styles.acceptButton}>OK</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertNoMoreCoupons;