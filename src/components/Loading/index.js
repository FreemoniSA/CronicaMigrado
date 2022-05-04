import React from "react";
import { ActivityIndicator } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Overlay } from "react-native-elements";
import THEME from "../../utils/constants/theme";
import styles from "./styles";
export default function Loading({ isVisible, text }) {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgoundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color={THEME.colors.red} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}
