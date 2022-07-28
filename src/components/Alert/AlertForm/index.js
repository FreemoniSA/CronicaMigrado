import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const AlertForm = ({ closeAlertForm, title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{description}</Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={closeAlertForm}>
          <View>
            <Text style={styles.acceptButton}>Aceptar</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertForm;