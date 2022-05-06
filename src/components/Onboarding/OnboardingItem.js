import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width }]}
      />
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems:"center",
  },
  image: {
    flex: 0.9,
    justifyContent: "center",
  },
});
