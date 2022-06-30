import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { Button, Icon, Input } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import styles from "./styles";
import Loading from "../Loading";
import auth from "@react-native-firebase/auth";
import CustomInput from "../CustomInput";
import { useForm, Controller } from "react-hook-form";
import { EMAIL_REGEX } from "../../utils/constants/regex";
import BASE_URL from "../../utils/constants/baseUrl";
import { createUserFreemoniDb } from "../../services";
import PopUp from "../PopUp";
import AlertMaintenance from "../Alert/AlertMaintenance";
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [alertMaintenance, setAlertMaintenance] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pwd = watch("password");

  const onSubmitSignupHandle = async (data) => {
    try {
      await auth().createUserWithEmailAndPassword(data.email, data.password);
      const dataUser = await createUserFreemoniDb(data);
      console.log(dataUser);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    }
  };

  return (
    <View style={[styles.form, { marginBottom: 40 }]}>
      <CustomInput
        name="name"
        placeholder="Nombre"
        control={control}
        rules={{
          required: "Nombre es requerido",
        }}
      />
      <CustomInput
        name="lastname"
        placeholder="Apellido"
        control={control}
        rules={{
          required: "Apellido es requerido",
        }}
      />
      <CustomInput
        name="dni"
        placeholder="D.N.I."
        control={control}
        rules={{
          required: "DNI es requerido",
        }}
      />
      <CustomInput
        name="email"
        placeholder="Ingresá tu email..."
        control={control}
        rules={{
          required: "Email es requerido",
          pattern: {
            value: EMAIL_REGEX,
            message: "Introduzca un email válido",
          },
        }}
      />
      <CustomInput
        name="password"
        placeholder="Ingresá tu contraseña..."
        control={control}
        rules={{
          required: "Contraseña es requerido",
          minLength: { value: 8, message: "Mínimo 8 caracteres" },
        }}
        secureTextEntry
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        passwordIcon
      />
      {/* <CustomInput
        name="confirmPassword"
        placeholder="Confirmá tu contraseña..."
        control={control}
        rules={{
          validate: (value) => value === pwd || "Las contraseñas no coinciden",
        }}
        secureTextEntry
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        passwordIcon
      /> */}
      <Button
        title="Registrarse"
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
      <Loading isVisible={loading} text="Creando cuenta..." />
    </View>
  );
}
