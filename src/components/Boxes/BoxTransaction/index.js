import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import TRANSACTIONS_SUBJECTS from "../../../utils/constants/transactionsSubject";
import { getUserCoupon } from "../../../services";
import moment from "moment";
import "moment/locale/es";

const BoxTransaction = ({ data, navigation }) => {
  const couponCreatedHandle = async () => {
    try {
      if (data.subject !== "couponCreated") return;
      const couponTransaction = await getUserCoupon(data.trxId);
      navigation.navigate({
        name: "Modal",
        params: {
          id: "asdasd1",
          data: {
            name: couponTransaction.posData.name,
            area: couponTransaction.posData.area,
            img: couponTransaction.posData.photoUrl,
            additionalInfo: couponTransaction.additionalInfo,
            discount: couponTransaction.discount,
            type: "classic",
            link: couponTransaction.posData.appLink,
            userCouponData: couponTransaction.userCouponData
              ? couponTransaction.userCouponData.code
              : null,
            posId: couponTransaction.id,
          },
        },
      });
    } catch (error) {
      throw error;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={couponCreatedHandle}>
      <View style={styles.container}>
        <View style={{ width: "45%" }}>
          <Text style={styles.desc}>{TRANSACTIONS_SUBJECTS[data.subject]}</Text>
          <Text style={styles.date}>
            {moment(data.createdAt).locale("es").startOf("hora").fromNow()}
          </Text>
        </View>
        <View style={{ width: "40%" }}>
          <Text
            style={[styles.balance, data.amount > 0 && styles.greenBalance]}
          >
            {`${data.amount > 0 ? "+" : "-"}`} c${" "}
            {parseInt(data.amount) < 0
              ? parseInt(data.amount) * -1
              : parseInt(data.amount)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BoxTransaction;
