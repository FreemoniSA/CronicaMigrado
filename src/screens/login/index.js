import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from "../../components/Account/LoginForm";
import logo from "../../../assets/club-cronica-circle.png";
import styles from "./styles";

export default function Login() {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.containerScreen}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <View style={styles.container}>
          <LoginForm />
          <RecoverPassoword />
          <CreateAccount />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

function RecoverPassoword() {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordContainer}>
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("Recover-password")}
      >
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
}

function CreateAccount(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.redirectContainers}>
      <Text
        style={styles.register}
        onPress={() => navigation.navigate("Signup")}
      >
        ¿Aún no tienes una cuenta?{" "}
        <Text style={styles.btnRegister}>Regístrate</Text>
      </Text>
    </View>
  );
}

