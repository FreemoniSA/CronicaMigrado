import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useQuery, useMutation } from "react-query";
import { queryClient } from "../../../App";
import BoxNotifications from "../../components/Boxes/BoxNotifications";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import Separator from "../../components/Separator";
import useAppContext from "../../context/useAppContext";
import {
  getMoreNotifications,
  getNotifications,
} from "../../services";
import styles from "./styles";
const Notifications = () => {
  const { data: notifications, isLoading } = useQuery(
    ["notifications"],
    getNotifications
  );
  

  const { mutate: addNotifications, isLoading: isLoadingMutation } =
    useMutation(
      async () => {
        if (notifications?.length === 0) return [];
        let lastId = notifications[notifications.length - 1].id;
        const newNotifications = await getMoreNotifications(lastId);
        return newNotifications;
      },
      {
        onSuccess: async (lastNotifications) => {
          queryClient.setQueryData("notifications", (old) => [
            ...old,
            ...lastNotifications,
          ]);
        },
      }
    );

  return (
    <View style={styles.container}>
      {notifications && (
        <FlatList
          data={notifications}
          keyExtractor={(item, idx) => idx.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={addNotifications}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Card srcImg={{ uri: item.photoUrl }} size="small" horizontal>
              <BoxNotifications data={item} />
            </Card>
          )}
        />
      )}
      {isLoading && <Loader />}
      {isLoadingMutation && <Loader />}
    </View>
  );
};

export default Notifications;
