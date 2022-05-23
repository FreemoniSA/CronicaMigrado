import React from "react";
import { View, Text, ScrollView } from "react-native";
import BoxGiftHeader from "../../components/Boxes/BoxGiftHeader";
import BoxGift from "../../components/Boxes/BoxGift";
import Card from "../../components/Card";
import { brands } from "../../components/mockdata/brands";
import styles from "./styles";
import Separator from "../../components/Separator";
import { useQuery } from "react-query";
import { getCouponsAvailable } from "../../services";
const Cronipesos = ({ route }) => {
  const { id, photoUrl, name, area } = route.params;
  const { data: coupons, refetch: refetchCouponsAvailable } = useQuery(
    [`coupons-${id}`, id],
    () => getCouponsAvailable(id)
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card
        srcImg={{ uri:photoUrl }}
        size="small"
        horizontal
        borderRound
        width="widthWithMinimunMargin"
      >
        <BoxGiftHeader data={{ name, area }} />
      </Card>
      <Separator />
      <View style={styles.titleBlackContainer}>
        <Text style={styles.titleBlack}>Exclusivo Black</Text>
      </View>
      {/* <View style={styles.containerBlack}>
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
      </View> */}
      <Separator />
      {coupons && (
        <View style={styles.containerClassic}>
          {coupons.map((item, idx) => (
            <Card
              key={idx}
              srcImg={{ uri: item.posData.photoUrl }}
              size="small"
              horizontal
              shadow
              borderRound
              width="widthWithMinimunMargin"
              theme="classic"
              //   onPress={() =>
              //     navigation.navigate({ name: "Modal", params: { id: item.id } })
              //   }
            >
               <BoxGift data={item} />
            </Card>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Cronipesos;
