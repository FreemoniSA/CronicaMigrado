import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../../utils/constants/theme";
const AlertMaintenance = ({ setAlertMaintenance }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons name="build" size={60} color={THEME.colors.red} />
      </View>
      <Text style={styles.title}>¡Tareas de mantenimiento!</Text>
      <Text style={styles.desc}>
        Esta funcionalidad no se encuentra disponible por el momento. ¡Te
        invitamos a utilizar alguno de los otros sistemas de autenticación!
      </Text>
      <View style={styles.buttons}>
        <TouchableWithoutFeedback onPress={() => setAlertMaintenance(false)}>
          <View>
            <Text style={styles.acceptButton}>CERRAR</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertMaintenance;
