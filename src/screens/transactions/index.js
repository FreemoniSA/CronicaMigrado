import React from "react";
import { View, Text, FlatList } from "react-native";
import BoxTransaction from "../../components/Boxes/BoxTransaction";
import Card from "../../components/Card";
import styles from "./styles";
import { transacciones } from "../../components/mockdata/transactions";
import Separator from "../../components/Separator";
const Transactions = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={transacciones}
        keyExtractor={(item, idx) => idx.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={({ item }) => (
          <Card srcImg={item.img} size="small" horizontal width="fullWidth">
            <BoxTransaction data={item} />
          </Card>
        )}
      />
    </View>
  );
};

export default Transactions;
