import { View, Text, Animated, Dimensions, FlatList } from "react-native";
import React, { useRef, useEffect } from "react";

const BrandsSkeleton = () => {
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
        paddingVertical:10,
        paddingHorizontal:5,
        marginTop:10
      }}
    >
      <View
        style={{
          height: 20,
          width: 160,
          backgroundColor: "#adadad",
          marginHorizontal: 5,
          borderRadius:20,
          marginBottom:5
        }}
      ></View>
      <FlatList
        data={[1, 2, 3, 4]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: 120,
              height: 120,
              backgroundColor: "#adadad",
              borderRadius: 5,
              marginHorizontal: 5,
            }}
          />
        )}
        keyExtractor={(_, idx) => idx.toString()}
      />
    </Animated.View>
  );
};

export default BrandsSkeleton;
