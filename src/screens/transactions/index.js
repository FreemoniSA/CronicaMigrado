import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import BoxTransaction from "../../components/Boxes/BoxTransaction";
import Card from "../../components/Card";
import styles from "./styles";
import { transacciones } from "../../components/mockdata/transactions";
import Separator from "../../components/Separator";
import { useQuery, useMutation } from "react-query";
import {
  getAccountData,
  getDataUser,
  getMoreTransactionsByUser,
  getTransactionsByUser,
} from "../../services";
import useAppContext from "../../context/useAppContext";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import Loader from "../../components/Loader";
import BASE_URL from "../../utils/constants/baseUrl";
import { queryClient } from "../../../App";
const Transactions = ({ navigation }) => {
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

  const {
    data: transactionsByUser,
    refetch: refetchGetTransactions,
    isLoading,
  } = useQuery(
    ["transactionsByUser"],
    () => getTransactionsByUser(dataUser, dataAccount),
    { enabled: !!dataAccount }
  );

  useRefreshOnFocus(refetchGetTransactions);

  

  const { mutate: addTransactions, isLoading: isLoadingMutation } = useMutation(
    async () => {
      if (transactionsByUser?.length === 0) return [];
      let trxId = transactionsByUser[transactionsByUser.length - 1].trxId;
      const newTransactions = await getMoreTransactionsByUser(
        dataUser,
        dataAccount,
        trxId
      );
      return newTransactions;
    },
    {
      onSuccess: async (transactions) => {
        queryClient.setQueryData("transactionsByUser", (old) => [
          ...old,
          ...transactions,
        ]);
      },
    }
  );

  return (
    <View style={styles.container}>
      {transactionsByUser && (
        <FlatList
          data={transactionsByUser}
          keyExtractor={(item, idx) => idx.toString()}
          showsVerticalScrollIndicator={false}
          onEndReached={addTransactions}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Card
              srcImg={{
                uri: item?.intermediary?.photoUrl || item.fmTypeData.shopPhoto,
              }}
              size="small"
              horizontal
              width="fullWidth"
            >
              <BoxTransaction data={item} navigation={navigation} />
            </Card>
          )}
        />
      )}
      {isLoading && <Loader />}
      {isLoadingMutation && <Loader />}
    </View>
  );
};

export default Transactions;
