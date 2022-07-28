import React, { useState } from "react";
import { Alert, StyleSheet, View, TextInput, Text, Image } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import styles from "./styles";
import logo from "../../../assets/club-cronica-circle.png";
import Loading from "../../components/Loading";
import PopUp from "../../components/PopUp";
import AlertForm from "../../components/Alert/AlertForm";
import { recoverPassword } from "../../services";
import ERRORS from "../../utils/constants/errors";
import { EMAIL_REGEX } from "../../utils/constants/regex";
export default function RecoverPassword({ navigation }) {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alertForm, setAlertForm] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);

  const onSubmit = async () => {
    if (!EMAIL_REGEX.test(email)) {
      setTitle("Email inválido");
      setDescription("Por favor introduzca un correo electrónico válido");
      setAlertForm(true);
      return;
    }
    try {
      setLoading(true);
      await recoverPassword(email);
      setLoading(false);
      setTitle("Revisa tu bandeja de entrada.");
      setDescription(
        "Un correo eléctronico con instrucciones para recuperar la contraseña ha sido enviado."
      );
      setAlertForm(true);
    } catch (error) {
      setLoading(false);
      if (error.moreInfo in ERRORS) {
        setTitle("Ups");
        setDescription(ERRORS[error.moreInfo]);
        setAlertForm(true);
        return;
      }
      setTitle("Ups");
      setDescription(
        "Ha ocurrido un error en el recupero de contraseña. Vuelve a intentar."
      );
      setAlertForm(true);
      return;
    }
  };

  const closeAlertForm = () => {
    setTitle(null);
    setDescription(null);
    setAlertForm(false);
  };

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
        onPress={onSubmit}
      />
      <PopUp visible={alertForm}>
        <AlertForm
          closeAlertForm={closeAlertForm}
          title={title}
          description={description}
        />
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