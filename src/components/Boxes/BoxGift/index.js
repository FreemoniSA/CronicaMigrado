import React from "react";
import { View, Text } from "react-native";
import SHOP_AREAS from "../../../utils/constants/shopAreas";
import styles from "./styles";

const BoxGift = ({ data }) => {
  const { type } = data;
  return (
    <View style={styles.container}>
      <View style={{ width: "45%" }}>
        <Text style={[styles.store, type === "black" && styles.themeBlack]}>
          {data.posData.name}
        </Text>
        <Text style={[styles.storeType, type === "black" && styles.themeBlack]}>
          {SHOP_AREAS[data.posData.area]}
        </Text>
      </View>
      <View style={styles.separator}></View>
      <View style={{ width: "35%", justifyContent:"center" }}>
        <Text style={[styles.balance, type === "black" && styles.themeBlack]}>
          c$ {data.discount}
        </Text>
        {data?.customizableText ? (
          <Text
            style={[styles.minAmount, type === "black" && styles.themeBlack]}
          >
            {data.customizableText}
          </Text>
        ) : (
          <Text
            style={[styles.minAmount, type === "black" && styles.themeBlack]}
          >
            A partir de: ${data.minAmount}
          </Text>
        )}
      </View>
    </View>
  );
};

export default BoxGift;
