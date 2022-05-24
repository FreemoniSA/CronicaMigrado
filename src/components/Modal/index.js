import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { regalos } from "../mockdata/gifts";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import styles from "./styles";
import Card from "../Card";
import BoxGiftHeader from "../Boxes/BoxGiftHeader";
import Framer from "../Framer";
import BoxUsageCronipesos from "../Boxes/BoxUsageCronipesos";
import FooterFixed from "../FooterFixed";
import Button from "../Button";
import useGetUserRole from "../../hooks/useGetUserRole";
import logoBlack from "../../../assets/club-cronica-black.png";
const Modal = ({ route, navigation }) => {
  const role = useGetUserRole();
  const { id, data } = route.params;
  console.log("route", route.params)
  // useEffect(() => {
  //   const findData = regalos.find((item) => item.id === id);
  //   setData(findData);
  // }, []);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.closeContainer}>
          <Ionicons
            name="close-outline"
            color={THEME.colors.blackCronica}
            size={30}
            onPress={() => navigation.goBack()}
          />
        </View>
        {data && (
          <Card
            srcImg={{ uri:data.img }}
            size="small"
            horizontal
            shadow
            borderRound
            width="widthWithMinimunMargin"
            theme={data.type}
          >
            <BoxGiftHeader data={data} />
          </Card>
        )}
        {data && (
          <Framer
            greatPadding
            title={
              <Text>
                <Text style={styles.cronipesosText}>c$ {data.discount}</Text> de
                regalo
              </Text>
            }
          >
            <BoxUsageCronipesos list={data.additionalInfo} />
          </Framer>
        )}
      </ScrollView>
      {data && (
        <FooterFixed>
          {data.type === "black" && role === "classic" ? null : (
            <Button
              text="USAR MIS CRONIPESOS"
              color={role === "classic" ? "green" : "black"}
              margin
            />
          )}
          {data.type === "black" && role === "classic" ? null : (
            <Button
              color="blue"
              margin
              text={
                <Text>
                  {`IR A ${data.store}`}{" "}
                  <Ionicons
                    name="open-outline"
                    size={18}
                    color={THEME.colors.white}
                  />
                </Text>
              }
            />
          )}
          {data.type === "black" && role === "classic" && (
            <Button
              color="black"
              margin
              text={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ color: THEME.colors.white, paddingRight: 10 }}
                  >{`CONVERTITE EN BLACK`}</Text>
                  <Image source={logoBlack} style={{ width: 30, height: 30 }} />
                </View>
              }
            />
          )}
          {data.type === "black" && role === "classic" && (
            <Ionicons
              name="help-circle-outline"
              size={40}
              color={THEME.colors.black}
              style={{ alignSelf: "center" }}
            />
          )}
        </FooterFixed>
      )}
    </View>
  );
};

export default Modal;
