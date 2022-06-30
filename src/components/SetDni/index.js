import { View, Text, TouchableWithoutFeedback, TextInput } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { getDataUser, setDni } from "../../services";
import REGEX_DNI from "../../utils/constants/regexDni";
import { useQuery } from "react-query";
import useAppContext from "../../context/useAppContext";
const SetDni = ({ setPopUpDni }) => {
  const { user } = useAppContext();
  const [message, setMessage] = useState(null);
  const [number, setNumber] = useState("");
  const [error, setError] = useState(null);
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );
  const onChangeNumber = (text) => {
    setNumber(text);
  };
  const onSubmitHandle = async () => {
    const regex = REGEX_DNI.test(number);
    if (!regex) {
      setError("Introduzca un número de DNI válido");
      return;
    }
    setError(null);
    try {
      await setDni(number);
      await refetchDataUser();
      setMessage(true);
    } catch (error) {
      throw error;
    }
  };
  return (
    <View style={styles.container}>
      {!message && (
        <>
          <Text style={styles.title}>Especifique su DNI</Text>
          <Text style={styles.desc}>
            El DNI debe coincidir con el utilizado en su cuenta en la APP YPF
          </Text>
          <TextInput
            style={[styles.input, { borderColor: error ? "red" : "#adadad99" }]}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Ingresá tu DNI"
            keyboardType="numeric"
          />
          {error && (
            <View style={{ marginTop: -10, marginBottom: 10 }}>
              <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
            </View>
          )}

          <View style={styles.buttons}>
            <TouchableWithoutFeedback onPress={() => setPopUpDni(false)}>
              <View>
                <Text style={styles.cancelButton}>Cancelar</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={onSubmitHandle}>
              <View>
                <Text style={styles.acceptButton}>OK</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
      {message && (
        <>
          <Text style={styles.title}>¡Muchas gracias!</Text>
          <Text style={styles.desc}>
            Las cuentas se vincularán en el plazo de 7 días hábiles.
          </Text>
          <View style={styles.buttons}>
            <TouchableWithoutFeedback onPress={() => setPopUpDni(false)}>
              <View>
                <Text style={styles.acceptButton}>OK</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </>
      )}
    </View>
  );
};

export default SetDni;
