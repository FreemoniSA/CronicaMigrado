import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useQuery } from "react-query";
import BoxNotifications from "../../components/Boxes/BoxNotifications";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { notificaciones } from "../../components/mockdata/notifications";
import Separator from "../../components/Separator";
import {
  getNotifications,
  getSalePoints,
  getTransactionsByUser,
  traerUsuarios,
} from "../../services";
import styles from "./styles";
const Notifications = () => {
  const { data: notifications, isLoading } = useQuery(
    ["notifications"],
    getNotifications
  );

  return (
    <View style={styles.container}>
      {notifications && (
        <FlatList
          data={notifications}
          keyExtractor={(item, idx) => idx.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Card srcImg={{ uri: item.photoUrl }} size="small" horizontal>
              <BoxNotifications data={item} />
            </Card>
          )}
        />
      )}
      {isLoading && <Loader />}
    </View>
  );
};

export default Notifications;
