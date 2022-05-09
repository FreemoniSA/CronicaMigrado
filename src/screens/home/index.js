import React, { useState } from "react";
import { ScrollView, View, FlatList, Text, Image, Share } from "react-native";
import Card from "../../components/Card";
import Framer from "../../components/Framer";
import { regalos, marcas } from "../../components/mockdata/home";
import PopUp from "../../components/PopUp";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import Button from "../../components/Button";
const Home = ({ navigation }) => {
  const [visible, setVisible] = useState(true);

  const onShareApp = () => {
    Share.share({
      message:
        "https://play.google.com/store/apps/details?id=com.freemoni.clubcronicaapp&hl=es_AR&gl=US",
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
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
                Por cada amigo que descargue la app con tu
                código, recibís cronipesos.
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
            renderItem={({ item }) => <Card srcImg={item.img} size="rectangle"/>}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </Framer>
        <Framer title="Seleccioná la marca">
          <FlatList
            data={marcas}
            horizontal={true}
            renderItem={({ item }) => (
              <Card
                srcImg={item.img}
                description={item.desc}
                onPress={() => navigation.navigate({ name: "Cronipesos" })}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </Framer>
        <Framer title="Volvé a disfrutarlo" footer="Ver más compras">
          <Card
            srcImg={marcas[3].img}
            size="small"
            description={marcas[3].desc}
            horizontal
          />
        </Framer>
      </View>
    </ScrollView>
  );
};

export default Home;
