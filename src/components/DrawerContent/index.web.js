import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import cronicaDrawer from "../../../assets/club-cronica.png";
import cronicaDrawerBlack from "../../../assets/club-cronica-black.png";
import freemoniLogo from "../../../assets/logo-home-2.png";
import styles from "./styles";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Button from "../Button";
import useGetUserRole from "../../hooks/useGetUserRole";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import { signOut } from "firebase/auth"
import { auth } from "../../../Firebase";
const CustomDrawerContent = (props) => {
  const role = useGetUserRole();
  const onShareApp = () => {
    Share.share({
      message:
        "https://play.google.com/store/apps/details?id=com.freemoni.clubcronicaapp&hl=es_AR&gl=US",
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const closeSession = () => {
    signOut(auth)
    .then(()=> console.log("sign out successfull"))
    .catch((error)=>console.log(error))
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ paddingTop: 0 }}
    >
      <View style={styles.container}>
        <View>
          <Image
            source={role === "classic" ? cronicaDrawer : cronicaDrawerBlack}
            style={styles.img}
          />
          <DrawerItemList {...props} />
        </View>
        <View>
          <View style={styles.footerItemContainer}>
            <TouchableWithoutFeedback onPress={onShareApp}>
              <View style={styles.shareButton}>
                <Ionicons
                  name="share-social-outline"
                  size={28}
                  color={THEME.colors.red}
                />
                <Text style={styles.shareButtonText}>Compartir App</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={[styles.footerItemContainer, styles.powerBy]}>
            <Text style={styles.footerItem}>Powered by</Text>
            <Image source={freemoniLogo} />
          </View>
          <View style={styles.footerItemContainer}>
            <Text style={styles.footerItem}>Version 1.2.9</Text>
          </View>
          <View style={styles.footerItemContainer}>
            <Button
              text="Cerrar sesión"
              color={role === "classic" ? "red" : "blackCronica"}
              onPress={() => closeSession()}
            />
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
