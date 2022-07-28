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
  signInClubCronica,
} from "../../services";
import useAppContext from "../../context/useAppContext";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import PopUp from "../PopUp";
import ERRORS from "../../utils/constants/errors";
import AlertForm from "../Alert/AlertForm";
//import * as Facebook from "expo-facebook";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertForm, setAlertForm] = useState(false);
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
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
      console.log(error);
      setLoading(false);
      throw error;
    }
  };

  // const signInWithFacebookHandle = async () => {
  //   try {
  //     setLoading(true);
  //     setRegister(false);
  //     await Facebook.initializeAsync({
  //       appId: "331400501083799",
  //     });
  //     const { type, token, expirationDate, permissions, declinedPermissions } =
  //       await Facebook.logInWithReadPermissionsAsync({
  //         permissions: ["public_profile", "email"],
  //       });
  //     if (type === "success") {
  //       const facebookCredential = auth.FacebookAuthProvider.credential(token);
  //       const user_sign_in = await auth().signInWithCredential(
  //         facebookCredential
  //       );
  //       if (user_sign_in.additionalUserInfo.isNewUser) {
  //         const dataUser = await createUserSocialAuthFreemoniDb(
  //           user_sign_in.user
  //         );
  //       }
  //     } else {
  //       // type === 'cancel'
  //     }
  //     setLoading(false);
  //     setRegister(true);
  //   } catch (error) {
  //     setLoading(false);
  //     if (error.code in ERRORS) {
  //       setTitle("Ocurrió un error");
  //       setDescription(ERRORS[error.code]);
  //       setAlertForm(true);
  //       return;
  //     }
  //     setTitle("Ocurrió un error");
  //     setDescription(
  //       "Ha ocurrido un error en el registro de tu nuevo usuario. Por favor vuelve a intentar."
  //     );
  //     setAlertForm(true);
  //     return;
  //   }
  // };

  const signInWithFacebookHandle = async () => {
    try {
      setLoading(true);
      setRegister(false);
      const result = await LoginManager.logInWithPermissions([
        "public_profile",
        "email",
      ]);
      if (result.isCancelled) {
        setLoading(false);
        setTitle("Ocurrió un error");
        setDescription("Se canceló el proceso de autenticación.");
        setAlertForm(true);
        return;
      }
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        setLoading(false);
        setTitle("Ocurrió un error");
        setDescription(
          "Se produjo un error al momento de la autenticación. Por favor vuelva a intentar."
        );
        setAlertForm(true);
        return;
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken
      );

      const user_sign_in = await auth().signInWithCredential(
        facebookCredential
      );
      if (user_sign_in.additionalUserInfo.isNewUser) {
        const dataUser = await createUserSocialAuthFreemoniDb(
          user_sign_in.user
        );
      }
      
      setLoading(false);
      setRegister(true);
    } catch (error) {
      setLoading(false);
      setTitle("Ocurrió un error");
      setDescription(
        "Se produjo un error al momento de la autenticación. Por favor vuelva a intentar."
      );
      setAlertForm(true);
      return;
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      setLoading(true);
      setRegister(false);
      const loginUser = await signInClubCronica(data);
      const login = await auth().signInWithEmailAndPassword(
        data.email,
        loginUser
      );
      setLoading(false);
      setRegister(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.moreInfo in ERRORS) {
        setTitle("Ocurrió un error");
        setDescription(ERRORS[error.moreInfo]);
        setAlertForm(true);
        return;
      }
      setTitle("Ocurrió un error");
      setDescription(
        "Ha ocurrido un error en la autenticación. Por favor vuelve a intentar."
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
      <PopUp visible={alertForm}>
        <AlertForm
          closeAlertForm={closeAlertForm}
          title={title}
          description={description}
        />
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
