import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import Img from "../../components/Img";
import { userprof } from "../../components/mockdata/profile";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import useGetUserRole from "../../hooks/useGetUserRole";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import { getDataUser } from "../../services";
import * as Clipboard from "expo-clipboard";
const Profile = () => {
  const [copyCode, setCopyCode] = useState("");
  const role = useGetUserRole();
  const { user } = useAppContext();
  const { data: dataUser, refetch: refetchDataUser } = useQuery(
    ["dataUser", user],
    () => getDataUser(user),
    { enabled: !!user }
  );

  const copyToClipboard = () => {
    if(!dataUser.freemoniCode) return;
    Clipboard.setString(dataUser.freemoniCode);
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.containerUserData}>
        <Img srcImg={userprof.image} />
        <View>
          <Text style={[styles.userDataTextName]}>{dataUser?.displayName}</Text>
          <Text style={[styles.userDataText]}>{dataUser?.email}</Text>
          <Text style={[styles.userDataText]}>{userprof.status}</Text>
        </View>
      </View>
      <View style={styles.containerUserCode}>
        <Text style={styles.userCodeTitle}>Código de usuario</Text>
        <Text style={styles.userCodeSubheading}>
          Úsalo para vincular tus cuentas en Crónica
        </Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{dataUser?.freemoniCode}</Text>
          <Button text="Copiar" color="red" onPress={copyToClipboard} />
        </View>
      </View>
      {/* {role === "classic" && (
        <View style={styles.containerBlack}>
          <Button text="Obtené tu membresía" color="black" />
          <Ionicon
            name="help-circle-outline"
            size={40}
            color={THEME.colors.black}
            style={styles.iconHelp}
          />
          <Text style={styles.titleBlack}>¿Cómo ser black?</Text>
          <Text style={styles.stepsBlack}>
            1. Elegí una opción de colaboración con club Crónica.
          </Text>
          <Text style={styles.stepsBlack}>
            2. Realizá el aporte y entrá a tu perfil de contribuciones.
          </Text>
          <Text style={styles.stepsBlack}>
            3. Pegá tu código de usuario de Club Crónica. ¡Listo! Ya sos Miembro
            Black.
          </Text>
        </View>
      )} */}
    </View>
  );
};

export default Profile;
