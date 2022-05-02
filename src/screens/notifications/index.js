import React from "react";
import { View, FlatList } from "react-native";
import BoxNotifications from "../../components/Boxes/BoxNotifications";
import Card from "../../components/Card";
import { notificaciones } from "../../components/mockdata/notifications";
import Separator from "../../components/Separator";
import styles from "./styles";
const Notifications = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notificaciones}
        keyExtractor={(item, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Card srcImg={item.img} size="small" horizontal >
            <BoxNotifications data={item} />
          </Card>
        )}
      />
    </View>
  );
};

export default Notifications;
