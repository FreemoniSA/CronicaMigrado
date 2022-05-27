import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import CustomInput from "../CustomInput";
import { EMAIL_REGEX } from "../../utils/constants/regex";
import { createUserSocialAuthFreemoniDb, getAccountData, getDataUser } from "../../services";
import useAppContext from "../../context/useAppContext";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setRegister } = useAppContext()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  GoogleSignin.configure({
    webClientId:
      "762222987203-ldf0406b8tkplf9h196jrclg3fdrftke.apps.googleusercontent.com",
      offlineAccess:false,
      androidClientId:"762222987203-b5k22dmn1rmrkjaesggr0j5ipr6n7432.apps.googleusercontent.com"
  });

  const signInWithGoogleHandle = async () => {
    try {
      setRegister(false);
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user_sign_in = await auth().signInWithCredential(googleCredential);
      if(user_sign_in.additionalUserInfo.isNewUser){
        const dataUser = await createUserSocialAuthFreemoniDb(user_sign_in.user)
      }
      setRegister(true)
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitLogin = (data) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        console.log("Sign in");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  const onSubmitLoginHandle = (data) => {
    console.log("Se envia registro", data);
  };

  return (
    <View style={styles.container}>
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
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={handleSubmit(onSubmitLogin)}
      />
      <Button
        title="Iniciar Sesión con Google"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnGoogle}
        onPress={signInWithGoogleHandle}
        icon={
          <Icon
            name="google"
            type="material-community"
            marginRight={10}
            size={20}
            color="#fff"
          />
        }
      />
      <Loading isVisible={loading} text="Iniciando Sesión..." />
    </View>
  );
}
