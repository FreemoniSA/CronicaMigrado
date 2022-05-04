import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import logo from "../../../assets/club-cronica-circle.png";
import styles from "./styles";
export default function Register() {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.containerScreen}>
        <View style={styles.imageContainer}>
          <Image source={logo} style={styles.image} />
        </View>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}
