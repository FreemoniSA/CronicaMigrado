import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Loading from "../Loading";
import { useForm } from "react-hook-form";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import CustomInput from "../CustomInput";
import { EMAIL_REGEX } from "../../utils/constants/regex";
import {
  createUserSocialAuthFreemoniDb,
  getAccountData,
  getDataUser,
} from "../../services";
import useAppContext from "../../context/useAppContext";
//import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import AlertMaintenance from "../Alert/AlertMaintenance";
import PopUp from "../PopUp";
import * as Facebook from "expo-facebook";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [alertMaintenance, setAlertMaintenance] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setRegister } = useAppContext();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  GoogleSignin.configure({
    webClientId:
      "602566447454-poagc2ico1080hn8kio5hikpj6dn9dnb.apps.googleusercontent.com",
    offlineAccess: false,
  });

  const signInWithGoogleHandle = async () => {
    try {
      setLoading(true);
      setRegister(false);
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const user_sign_in = await auth().signInWithCredential(googleCredential);
      if (user_sign_in.additionalUserInfo.isNewUser) {
        const dataUser = await createUserSocialAuthFreemoniDb(
          user_sign_in.user
        );
      }
      setLoading(false);
      setRegister(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signInWithFacebookHandle = async () => {
    try {
      setLoading(true);
      setRegister(false);
      await Facebook.initializeAsync({
        appId: "331400501083799",
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
      if (type === "success") {
        const facebookCredential = auth.FacebookAuthProvider.credential(token);
        const user_sign_in = await auth().signInWithCredential(
          facebookCredential
        );
        if (user_sign_in.additionalUserInfo.isNewUser) {
          const dataUser = await createUserSocialAuthFreemoniDb(
            user_sign_in.user
          );
        }
      } else {
        // type === 'cancel'
      }
      setLoading(false);
      setRegister(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  // const signInWithFacebookHandle = async () => {
  //   try {
  //     setLoading(true);
  //     setRegister(false);
  //     const result = await LoginManager.logInWithPermissions([
  //       "public_profile",
  //       "email",
  //     ]);

  //     if (result.isCancelled) {
  //       throw "User cancelled the login process";
  //     }
  //     const data = await AccessToken.getCurrentAccessToken();

  //     if (!data) {
  //       throw "Something went wrong obtaining access token";
  //     }
  //     const facebookCredential = auth.FacebookAuthProvider.credential(
  //       data.accessToken
  //     );
  //     const user_sign_in = await auth().signInWithCredential(
  //       facebookCredential
  //     );
  //     if (user_sign_in.additionalUserInfo.isNewUser) {
  //       const dataUser = await createUserSocialAuthFreemoniDb(
  //         user_sign_in.user
  //       );
  //     }
  //     setLoading(false);
  //     setRegister(true);
  //   } catch (error) {
  //     setLoading(false);
  //     throw error;
  //   }
  // };

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
        onPress={() => setAlertMaintenance(true)}
      />
      <PopUp visible={alertMaintenance}>
        <AlertMaintenance setAlertMaintenance={setAlertMaintenance} />
      </PopUp>
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
      <Button
        title="Iniciar Sesión con Facebook"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnFb}
        onPress={signInWithFacebookHandle}
        icon={
          <Icon
            name="facebook"
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
