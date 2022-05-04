import React from "react";
import { View, Text, FlatList } from "react-native";
import BoxGift from "../../components/Boxes/BoxGift";
import Card from "../../components/Card";
import styles from "./styles";
import { regalos } from "../../components/mockdata/gifts";
const Gifts = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={regalos}
        keyExtractor={(item, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            srcImg={item.img}
            size="small"
            horizontal
            shadow
            borderRound
            width="widthWithMinimunMargin"
          >
            <BoxGift data={item} />
          </Card>
        )}
      />
    </View>
  );
};

export default Gifts;
