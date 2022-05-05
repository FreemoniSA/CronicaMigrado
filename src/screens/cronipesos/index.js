import React from "react";
import { View, Text, ScrollView } from "react-native";
import BoxGiftHeader from "../../components/Boxes/BoxGiftHeader";
import BoxGift from "../../components/Boxes/BoxGift";
import Card from "../../components/Card";
import { brands } from "../../components/mockdata/brands";
import styles from "./styles";
import Separator from "../../components/Separator";
const Cronipesos = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        srcImg={brands.img}
        size="small"
        horizontal
        borderRound
        width="widthWithMinimunMargin"
      >
        <BoxGiftHeader data={brands} />
      </Card>
      <Separator />
      <View style={styles.titleBlackContainer}>
        <Text style={styles.titleBlack}>Exclusivo Black</Text>
      </View>
      <View style={styles.containerBlack}>
        {brands.black.map((item, idx) => (
          <Card
            key={idx}
            srcImg={item.img}
            size="small"
            horizontal
            shadow
            borderRound
            width="widthWithMinimunMargin"
            theme={item.type}
            //   onPress={() =>
            //     navigation.navigate({ name: "Modal", params: { id: item.id } })
            //   }
          >
            <BoxGift data={item} />
          </Card>
        ))}
      </View>
      <Separator />
      <View style={styles.containerClassic}>
        {brands.classic.map((item, idx) => (
          <Card
            key={idx}
            srcImg={item.img}
            size="small"
            horizontal
            shadow
            borderRound
            width="widthWithMinimunMargin"
            theme={item.type}
            //   onPress={() =>
            //     navigation.navigate({ name: "Modal", params: { id: item.id } })
            //   }
          >
            <BoxGift data={item} />
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cronipesos;
