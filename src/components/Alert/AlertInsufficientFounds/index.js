import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const AlertInsufficientFounds = ({ setAlertFounds }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Fondos insuficientes!</Text>
      <Text style={styles.desc}>No tenés cronipesos suficientes.</Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={() => setAlertFounds(false)}>
          <View>
            <Text style={styles.acceptButton}>OK</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertInsufficientFounds;
