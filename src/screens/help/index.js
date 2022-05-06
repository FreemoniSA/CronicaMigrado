import React from "react";
import { View, Text } from "react-native";
import { helppages } from "../../components/mockdata/help";
import Redirect from "../../components/Redirect";
import styles from "./styles";
const Help = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {helppages.map((item, idx) => (
        <Redirect
          title={item.title}
          key={idx}
          onPress={() => item.redirect(navigation)}
        />
      ))}
    </View>
  );
};

export default Help;
