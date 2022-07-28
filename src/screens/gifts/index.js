import React from "react";
import { View, Text, FlatList } from "react-native";
import BoxGift from "../../components/Boxes/BoxGift";
import Card from "../../components/Card";
import styles from "./styles";
import { getAllCouponsAvailable } from "../../services";
import { useQuery } from "react-query";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import Loader from "../../components/Loader";
const Gifts = ({ navigation }) => {
  const {
    data: allCoupons,
    refetch: refetchAllCouponsAvailable,
    isLoading,
  } = useQuery(["allCoupons"], () => getAllCouponsAvailable());

  const onOpenModalHandle = (data) => {
    navigation.navigate({
      name: "Modal",
      params: {
        id: "asdasd1",
        data: {
          name: data.posData.name,
          area: data.posData.area,
          img: data.posData.photoUrl,
          additionalInfo: data.additionalInfo,
          discount: data.discount,
          type: "classic",
          link: data.posData.appLink,
          userCouponData: data.userCouponData ? data.userCouponData.code : null,
          posId: data.id,
        },
      },
    });
  };
  useRefreshOnFocus(refetchAllCouponsAvailable);
  return (
    <View style={styles.container}>
      {allCoupons && (
        <FlatList
          data={allCoupons}
          keyExtractor={(item, idx) => idx.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              srcImg={{ uri: item.posData.photoUrl }}
              size="small"
              horizontal
              shadow
              borderRound
              width="widthWithMinimunMargin"
              theme={item.type}
              onPress={() => onOpenModalHandle(item)}
            >
              <BoxGift data={item} />
            </Card>
          )}
        />
      )}
      {isLoading && <Loader />}
    </View>
  );
};

export default Gifts;
