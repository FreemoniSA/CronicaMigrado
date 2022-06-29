import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
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
import * as Linking from "expo-linking";
import * as Clipboard from "expo-clipboard";
import { getDataUser, getGenerateCodeCoupon } from "../../services";
import PopUp from "../PopUp";
import SetDni from "../SetDni";
import AlertYpf from "../Alert/AlertYpf";
import AlertInsufficientFounds from "../Alert/AlertInsufficientFounds";
import { useQuery } from "react-query";
import useAppContext from "../../context/useAppContext";

const Modal = ({ route, navigation }) => {
  const { user } = useAppContext();
  const role = useGetUserRole();
  const { id, data } = route.params;
  const [couponData, setCouponData] = useState(data.userCouponData);
  const [isLoading, setIsLoading] = useState(false);
  const [popUpDni, setPopUpDni] = useState(false);
  const [alertYpf, setAlertYpf] = useState(false);
  const [alertFounds, setAlertFounds] = useState(false);
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );

  const handleLink = () => {
    Linking.openURL(data.link);
  };

  const copyToClipboard = () => {
    Clipboard.setString(data.userCouponData);
  };
  const generateCodeHandle = async () => {
    if (!dataUser) return;
    if (data.name === "YPF" && !dataUser?.dni) {
      setPopUpDni(true);
      return;
    }
    if (data.name === "YPF") {
      setAlertYpf(true);
    }

    try {
      setIsLoading(true);
      const generatedCode = await getGenerateCodeCoupon(data.posId);
      if (generatedCode?.error === "insufficient-founds") {
        setAlertFounds(true);
        return;
      }
      setCouponData(generatedCode.code);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

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
            srcImg={{ uri: data.img }}
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
      <PopUp visible={alertFounds}>
        <AlertInsufficientFounds setAlertFounds={setAlertFounds} />
      </PopUp>
      <PopUp visible={popUpDni}>
        <SetDni setPopUpDni={setPopUpDni} />
      </PopUp>
      <PopUp visible={alertYpf}>
        <AlertYpf setAlertYpf={setAlertYpf} />
      </PopUp>
      {data && (
        <FooterFixed>
          {!isLoading && couponData && (
            <View style={styles.codeContainer}>
              <Text style={styles.codeText}>{couponData}</Text>
              <Button text="Copiar" color="red" onPress={copyToClipboard} />
            </View>
          )}
          {isLoading && (
            <ActivityIndicator size="large" color={THEME.colors.red} />
          )}
          {!isLoading && !couponData && (
            <Button
              text="USAR MIS CRONIPESOS"
              color="green"
              margin
              onPress={generateCodeHandle}
            />
          )}
          {/* {!data.userCouponData &&
          data.type === "black" &&
          role === "classic" ? null : (
            <Button
              text="USAR MIS CRONIPESOS"
              color={role === "classic" ? "green" : "black"}
              margin
            />
          )} */}
          {/* ------------------------------- */}
          {data.type === "black" && role === "classic" ? null : (
            <Button
              color="blue"
              margin
              onPress={handleLink}
              text={
                <Text>
                  {`IR A ${data.name.toUpperCase()}`}{" "}
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
