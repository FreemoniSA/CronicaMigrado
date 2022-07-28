import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
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
import AlertForm from "../Alert/AlertForm";
import ERRORS from "../../utils/constants/errors";
import REGEX_DNI from "../../utils/constants/regexDni";
import * as OpenAnything from "react-native-openanything";
export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [alertForm, setAlertForm] = useState(false);
  const [alertFormSuccess, setAlertFormSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [checked, setChecked] = useState(false);
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const pwd = watch("password");

  const onSubmitSignupHandle = async (data) => {
    if (!checked) {
      setTitle("Requisitos de registro");
      setDescription(
        "Para poder continuar con el registro es necesario que aceptes los términos y condiciones y las políticas de privacidad"
      );
      setAlertForm(true);
      return;
    }
    try {
      setLoading(true);
      const newUser = await createUserFreemoniDb(data);
      setLoading(false);
      setTitle("¡Registro exitoso!");
      setDescription(
        "¡Tu cuenta fue creada con éxito! Te enviamos un correo electrónico para que puedas verificarla y acceder."
      );
      setAlertFormSuccess(true);
    } catch (error) {
      console.log(error)
      setLoading(false);
      if (error?.errorKey in ERRORS) {
        setTitle("Ocurrió un error");
        setDescription(ERRORS[error.errorKey]);
        setAlertForm(true);
        return;
      }
      setTitle("Ocurrió un error");
      setDescription(
        "Ha ocurrido un error en el registro de tu nuevo usuario. Por favor vuelve a intentar."
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
  const closeAlertFormSuccess = () => {
    setTitle(null);
    setDescription(null);
    setAlertFormSuccess(false);
    navigation.navigate("Login");
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
          pattern: {
            value: REGEX_DNI,
            message: "Introduzca un DNI válido",
          },
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
      <View style={styles.termsAndConditionsContainer}>
        <View style={styles.checkContainer}>
          <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
            <View
              style={[
                styles.check,
                { backgroundColor: checked ? "black" : null },
              ]}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.textTermsContainer}>
          <Text>
            He leído y acepto los{" "}
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              onPress={() =>
                OpenAnything.Pdf(
                  "https://drive.google.com/file/d/1xKV8_u8teAqyGigqsP7CKmmu44Pj57DW/view?usp=sharing"
                )
              }
            >
              términos y condiciones
            </Text>{" "}
            y las{" "}
            <Text
              style={{ textDecorationLine: "underline", fontWeight: "bold" }}
              onPress={() =>
                OpenAnything.Pdf(
                  "https://drive.google.com/file/d/1xNDEy39d_fcBQ4Lc0sz5ZJHGZAGotN87/view?usp=sharing"
                )
              }
            >
              políticas de privacidad
            </Text>
          </Text>
        </View>
      </View>
      <Button
        title="Registrarse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={handleSubmit(onSubmitSignupHandle)}
      />
      <PopUp visible={alertForm}>
        <AlertForm
          closeAlertForm={closeAlertForm}
          title={title}
          description={description}
        />
      </PopUp>
      <PopUp visible={alertFormSuccess}>
        <AlertForm
          closeAlertForm={closeAlertFormSuccess}
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
      <Loading isVisible={loading} text="Creando cuenta..." />
    </View>
  );
}
