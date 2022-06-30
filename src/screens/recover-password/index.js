import React, { useState } from "react";
import { Alert, StyleSheet, View, TextInput, Text, Image } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import styles from "./styles";
// import { sendEmailResetPassword } from "../../utils/actions";
// import { validateEmail } from "../../utils/helpers";
import logo from "../../../assets/club-cronica-circle.png";
import Loading from "../../components/Loading";
import PopUp from "../../components/PopUp";
import AlertMaintenance from "../../components/Alert/AlertMaintenance";
export default function RecoverPassword({ navigation }) {
  const [alertMaintenance, setAlertMaintenance] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  // const validateData = () => {
  //   setErrorEmail(null);
  //   let valid = true;
  //   console.log("email", email);

  //   if (!validateEmail(email)) {
  //     setErrorEmail("Debes ingresar un email válido.");
  //     valid = false;
  //   }

  //   return valid;
  // };

  // const onSubmit = async () => {
  //   if (!validateData()) {
  //     return;
  //   }

  //   setLoading(true);
  //   const result = await sendEmailResetPassword(email);
  //   setLoading(false);

  //   if (!result.statusResponse) {
  //     Alert.alert("Error", "Este correo no está relacionado a ningún usuario.");
  //     return;
  //   }

  //   Alert.alert(
  //     "Confirmación",
  //     "Se le ha enviado un email con las instrucciones para cambiar la contraseña."
  //   );
  //   navigation.navigate("Login");
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={styles.inputComponent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu email..."
            onChange={(e) => setEmail(e.nativeEvent.text)}
            keyboardType="email-address"
            value={email}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{errorEmail}</Text>
        </View>
      </View>
      <Button
        title="Recuperar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => setAlertMaintenance(true)}
      />
      <PopUp visible={alertMaintenance}>
        <AlertMaintenance setAlertMaintenance={setAlertMaintenance} />
      </PopUp>
      <View style={styles.accountExistContainer}>
        <Text style={styles.accountExistText}>
          ¿Ya tienes cuenta?{" "}
          <Text
            onPress={() => navigation.navigate("Login")}
            style={styles.accountExistTextHighlighted}
          >
            Iniciar sesión
          </Text>
        </Text>
      </View>
      <Loading isVisible={loading} text="Recuperando contraseña..." />
    </View>
  );
}
