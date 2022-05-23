import React from "react";
import { View, Text, FlatList } from "react-native";
import BoxTransaction from "../../components/Boxes/BoxTransaction";
import Card from "../../components/Card";
import styles from "./styles";
import { transacciones } from "../../components/mockdata/transactions";
import Separator from "../../components/Separator";
import { useQuery } from "react-query";
import {
  getAccountData,
  getDataUser,
  getTransactionsByUser,
} from "../../services";
import useAppContext from "../../context/useAppContext";
const Transactions = () => {
  const { user } = useAppContext();
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );
  const { data: dataAccount, refetch: refetchDataAccount } = useQuery(
    ["dataAccount", dataUser],
    () => getAccountData(dataUser),
    { enabled: !!dataUser }
  );

  const { data: transactionsByUser } = useQuery(
    ["transactionsByUser", dataUser, dataAccount],
    getTransactionsByUser
  );

  console.log(dataUser);
  console.log(dataAccount);
  console.log(transactionsByUser);

  return (
    <View style={styles.container}>
      {transactionsByUser && (
        <FlatList
          data={transactionsByUser}
          keyExtractor={(item, idx) => idx.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Card
              srcImg={{ uri: item.fmTypeData.shopPhoto }}
              size="small"
              horizontal
              width="fullWidth"
            >
              <BoxTransaction data={item} />
            </Card>
          )}
        />
      )}
    </View>
  );
};

export default Transactions;
