import { View, Text, Animated, Dimensions, FlatList } from "react-native";
import React, { useRef, useEffect } from "react";

const TransactionsSkeleton = () => {
  const opacity = useRef(new Animated.Value(0.3));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 0.5,
          useNativeDriver: true,
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: true,
          duration: 800,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={{
        opacity: opacity.current,
        width: Dimensions.get("window").width * 0.95,
        backgroundColor: "#adadad99",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginTop: 10,
      }}
    >
      <View
        style={{
          height: 20,
          width: 160,
          backgroundColor: "#adadad",
          marginHorizontal: 5,
          borderRadius: 20,
          marginBottom: 5,
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 60,
            height: 60,
            backgroundColor: "#adadad",
            borderRadius: 50,
            marginHorizontal: 5,
          }}
        />
        <View
          style={{
            width: 200,
            height: 20,
            backgroundColor: "#adadad",
            borderRadius: 50,
            marginHorizontal: 5,
          }}
        />
      </View>
      <View
        style={{
          height: 20,
          width: 160,
          backgroundColor: "#adadad",
          marginHorizontal: 5,
          borderRadius: 20,
          marginVertical: 5,
        }}
      />
    </Animated.View>
  );
};

export default TransactionsSkeleton;
