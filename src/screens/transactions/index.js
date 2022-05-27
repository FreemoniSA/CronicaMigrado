import React, { useEffect } from "react";
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
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
const Transactions = () => {
  const { user } = useAppContext();
  const { data: dataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );
  const { data: dataAccount } = useQuery(
    ["dataAccount", dataUser],
    () => getAccountData(dataUser),
    { enabled: !!dataUser }
  );

  const { data: transactionsByUser, refetch:refetchGetTransactions } = useQuery(
    ["transactionsByUser", dataUser, dataAccount],
    () => getTransactionsByUser(dataUser, dataAccount),
    { enabled: !!dataAccount }
  );

  useRefreshOnFocus(refetchGetTransactions)

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
