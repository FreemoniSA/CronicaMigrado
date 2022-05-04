import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { size } from "lodash";
import { validateEmail } from "../../utils/helpers";
import {
  addDocumentWithId,
  getCurrentUser,
  getToken,
  registerUser,
} from "../../utils/actions";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import styles from "./styles";
import Loading from "../Loading";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValues());
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const doRegisterUser = async () => {
    if (!validateData()) {
      return;
    }

    setLoading(true);
    const result = await registerUser(formData.email, formData.password);
    if (!result.statusResponse) {
      setLoading(false);
      setErrorEmail(result.error);
      return;
    }

    const token = await getToken();
    const resultUser = await addDocumentWithId(
      "users",
      { token },
      getCurrentUser().uid
    );
    if (!resultUser.statusResponse) {
      setLoading(false);
      setErrorEmail(result.error);
      return;
    }

    setLoading(false);
    navigation.navigate("account");
  };

  const validateData = () => {
    setErrorConfirm("");
    setErrorEmail("");
    setErrorPassword("");
    let isValid = true;

    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes de ingresar un email válido.");
      isValid = false;
    }

    if (size(formData.password) < 6) {
      setErrorPassword(
        "Al menos seis carácteres."
      );
      isValid = false;
    }

    if (size(formData.confirm) < 6) {
      setErrorConfirm(
        "Al menos seis carácteres."
      );
      isValid = false;
    }

    if (formData.password !== formData.confirm) {
      setErrorPassword("La contraseña y la confirmación no son iguales.");
      setErrorConfirm("La contraseña y la confirmación no son iguales.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={styles.form}>
      <View style={styles.inputComponent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu email..."
            onChange={(e) => onChange(e, "email")}
            keyboardType="email-address"
            value={formData.email}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{errorEmail}</Text>
        </View>
      </View>
      <View style={styles.inputComponent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu contraseña..."
            secureTextEntry={!showPassword}
            onChange={(e) => onChange(e, "password")}
            value={formData.password}
          />
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={26}
            color={THEME.colors.darkgray}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{errorPassword}</Text>
        </View>
      </View>
      <View style={styles.inputComponent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Confirmar contraseña..."
            secureTextEntry={!showPassword}
            onChange={(e) => onChange(e, "confirm")}
            value={formData.confirm}
          />
          <Ionicons
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={26}
            color={THEME.colors.darkgray}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{errorConfirm}</Text>
        </View>
      </View>
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => doRegisterUser()}
        // onPress={()=>console.log("Do register")}
      />
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
      <Loading isVisible={loading} text="Creando cuenta..." />
    </View>
  );
}

const defaultFormValues = () => {
  return { email: "", password: "", confirm: "" };
};
