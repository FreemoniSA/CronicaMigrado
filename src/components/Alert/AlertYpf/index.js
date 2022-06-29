import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
const AlertYpf = ({ setAlertYpf }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Muchas Gracias!</Text>
      <Text style={styles.desc}>
        Si es la primera vez que usás Cronipesos para YPF, y lo solicitaste
        antes del viernes a las 11:00, los podrás usar en tu carga del sábado
        siquiente. Si lo hiciste después de esa hora, los podrás usar a partir
        del sábado posterior. Si no es la primera vez, los podés usar desde
        ahora mismo; siempre pagando desde la App de YPF.
      </Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={() => setAlertYpf(false)}>
          <View>
            <Text style={styles.acceptButton}>OK</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertYpf;
