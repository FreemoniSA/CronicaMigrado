import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  FlatList,
  Text,
  Image,
  Share,
  SafeAreaView,
  StatusBar,
} from "react-native";
import Card from "../../components/Card";
import Framer from "../../components/Framer";
import { regalos, marcas } from "../../components/mockdata/home";
import PopUp from "../../components/PopUp";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import Button from "../../components/Button";
import { getTransactionsByUser, getSalePoints, getDataUser, getAccountData, getCouponsAvailable } from "../../services";
import { useQuery } from "react-query";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import BoxTransaction from "../../components/Boxes/BoxTransaction";
import useAppContext from "../../context/useAppContext";
const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(true);
  const { user } = useAppContext();
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );
  const { data: dataAccount, refetch: refetchDataAccount } = useQuery(
    ["dataAccount", dataUser],
    () => getAccountData(dataUser),
    { enabled: !!dataUser }
  );

  const { data: transactionsByUser } = useQuery(
    ["transactionsByUser", dataUser, dataAccount],
    getTransactionsByUser
  );
  const { data: salePoints, refetch: refetchSalePoints } = useQuery(
    ["salePoints"],
    getSalePoints
  );

  
  useRefreshOnFocus(refetchSalePoints);
 

  const onShareApp = () => {
    Share.share({
      message:
        "https://play.google.com/store/apps/details?id=com.freemoni.clubcronicaapp&hl=es_AR&gl=US",
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <PopUp visible={visible}>
            <View style={styles.popUpContainer}>
              <View style={styles.popUpHeader}>
                <Ionicons
                  name="close-outline"
                  size={30}
                  color="#353535"
                  onPress={() => setVisible(false)}
                />
              </View>
              <Image
                source={require("../../../assets/modal.png")}
                style={styles.popUpImage}
              />
              <View>
                <Text style={styles.popUpTitle}>
                  Recibí cronipesos por compartir
                </Text>
                <Text style={styles.popUpParagraph}>
                  Por cada amigo que descargue la app con tu código, recibís
                  cronipesos.
                </Text>
                <Text style={styles.popUpParagraph}>
                  ¡Compartamos las cosas buenas!
                </Text>
                <View style={{ alignItems: "center" }}>
                  <Button text="Compartir" color="red" onPress={onShareApp} />
                </View>
              </View>
            </View>
          </PopUp>
          <Framer title="Regalos destacados">
            <FlatList
              data={regalos}
              horizontal={true}
              renderItem={({ item }) => (
                <Card srcImg={item.img} size="rectangle" />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </Framer>
          {salePoints && (
            <Framer title="Seleccioná la marca">
              <FlatList
                data={salePoints}
                horizontal={true}
                renderItem={({ item }) => (
                  <Card
                    srcImg={{ uri: item.photoUrl }}
                    description={item.name}
                    onPress={() => navigation.navigate("Cronipesos", {
                      id:item.mainPosId,
                      photoUrl:item.photoUrl,
                      name:item.name,
                      area:item.area
                    })}
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </Framer>
          )}
          <Framer title="Volvé a disfrutarlo" footer="Ver más compras">
            <Card
              srcImg={marcas[3].img}
              size="small"
              description={marcas[3].desc}
              horizontal
            />
          </Framer>
          {transactionsByUser && (
            <Framer
              title="Tus últimas transacciones"
              footer="Ver más transacciones"
            >
              {transactionsByUser.map((item, idx) => (
                <Card
                  srcImg={{ uri: item.fmTypeData.shopPhoto }}
                  size="small"
                  horizontal
                  width="fullWidth"
                  key={idx}
                >
                  <BoxTransaction data={item} />
                </Card>
              ))}
            </Framer>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
