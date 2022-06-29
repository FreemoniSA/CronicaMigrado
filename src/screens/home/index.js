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
import {
  getTransactionsByUser,
  getSalePoints,
  getDataUser,
  getAccountData,
  getCouponsAvailable,
  traerUsuarios,
} from "../../services";
import { useQuery } from "react-query";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import BoxTransaction from "../../components/Boxes/BoxTransaction";
import useAppContext from "../../context/useAppContext";
import Carousel from "../../components/Carousel";
import BrandsSkeleton from "../../components/Skeletons/BrandsSkeleton";
import TransactionsSkeleton from "../../components/Skeletons/TransactionsSkeleton";
import FooterFixed from "../../components/FooterFixed";
import BottomTabsHome from "../../components/BottomTabsHome";
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
  const {
    data: transactionsByUser,
    isLoading: isLoadingTransactions,
    refetch: refetchDataTransactions,
  } = useQuery(
    ["transactionsByUser"],
    () => getTransactionsByUser(dataUser, dataAccount),
    { enabled: !!dataAccount }
  );
  const {
    data: salePoints,
    refetch: refetchSalePoints,
    isLoading: isLoadingSalePoints,
  } = useQuery(["salePoints"], getSalePoints);
  useRefreshOnFocus(refetchSalePoints);
  useRefreshOnFocus(refetchDataTransactions);
  const onShareApp = () => {
    Share.share({
      message:
        "https://play.google.com/store/apps/details?id=com.freemoni.clubcronicaapp&hl=es_AR&gl=US",
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <View style={{ flex: 1 }}>
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

          <Carousel />
          {/* <Framer title="Regalos destacados">
            <FlatList
              data={regalos}
              horizontal={true}
              renderItem={({ item }) => (
                <Card srcImg={item.img} size="rectangle" />
              )}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
            />
          </Framer> */}
          {isLoadingSalePoints && <BrandsSkeleton />}
          {salePoints && (
            <Framer title="Seleccioná la marca">
              <FlatList
                data={salePoints}
                horizontal={true}
                renderItem={({ item }) => (
                  <Card
                    srcImg={{ uri: item.photoUrl }}
                    description={item.name}
                    onPress={() =>
                      navigation.navigate("Cronipesos", {
                        id: item.mainPosId,
                        photoUrl: item.photoUrl,
                        name: item.name,
                        area: item.area,
                      })
                    }
                  />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
              />
            </Framer>
          )}
          {/* <Framer title="Volvé a disfrutarlo" footer="Ver más compras">
            <Card
              srcImg={marcas[3].img}
              size="small"
              description={marcas[3].desc}
              horizontal
            />
          </Framer> */}
          {isLoadingTransactions && <TransactionsSkeleton />}

          {transactionsByUser && (
            <Framer
              title="Tus últimas transacciones"
              footer="Ver más transacciones"
              onFooterHandle={() => navigation.jumpTo("Transactions")}
            >
              {transactionsByUser.map((item, idx) => {
                if (idx > 2) return null;
                return (
                  <Card
                    srcImg={{
                      uri:
                        item?.intermediary?.photoUrl ||
                        item.fmTypeData.shopPhoto,
                    }}
                    size="small"
                    horizontal
                    width="fullWidth"
                    key={idx}
                  >
                    <BoxTransaction data={item} navigation={navigation} />
                  </Card>
                );
              })}
            </Framer>
          )}
        </View>
      </ScrollView>
      <FooterFixed>
        <BottomTabsHome navigation={navigation} />
      </FooterFixed>
    </View>
  );
};

export default Home;
