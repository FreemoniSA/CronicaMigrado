import React from "react";
import { ScrollView, View, FlatList } from "react-native";
import Card from "../../components/Card";
import Framer from "../../components/Framer";
import { regalos, marcas } from "../../components/mockdata/home";
const Home = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Framer title="Regalos destacados">
          <FlatList
            data={regalos}
            horizontal={true}
            renderItem={({ item }) => <Card srcImg={item.img} />}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </Framer>
        <Framer title="Seleccioná la marca">
          <FlatList
            data={marcas}
            horizontal={true}
            renderItem={({ item }) => (
              <Card srcImg={item.img} description={item.desc} onPress={()=>navigation.navigate({ name:"Cronipesos" })}/>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </Framer>
        <Framer title="Volvé a disfrutarlo" footer="Ver más compras">
          <Card  srcImg={marcas[3].img} size="small" description={marcas[3].desc} horizontal/>
        </Framer>
      </View>
    </ScrollView>
  );
};

export default Home;
