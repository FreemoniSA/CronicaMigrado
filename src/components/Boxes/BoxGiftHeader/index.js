import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import SHOP_AREAS from "../../../utils/constants/shopAreas";
const BoxGiftHeader = ({ data, remainCoupons }) => {
  const { type } = data;
  return (
    <View style={styles.container}>
      <Text style={[styles.store, type === "black" && styles.themeBlack]}>
        {data.name}
      </Text>
      <Text style={[styles.storeType, type === "black" && styles.themeBlack]}>
        {SHOP_AREAS[data.area]}
      </Text>
      {remainCoupons === 0 && (
        <Text style={styles.noMoreCoupons}>No disponible</Text>
      )}
      {remainCoupons > 0 && (
        <Text style={styles.noMoreCoupons}>
          Disponibles: {remainCoupons} regalos
        </Text>
      )}
    </View>
  );
};

export default BoxGiftHeader;
