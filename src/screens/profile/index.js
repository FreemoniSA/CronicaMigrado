import React from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import Img from "../../components/Img";
import { userprof } from "../../components/mockdata/profile";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import useGetUserRole from "../../hooks/useGetUserRole";
const Profile = () => {
  const role = useGetUserRole();
  return (
    <View style={styles.container}>
      <View style={styles.containerUserData}>
        <Img srcImg={userprof.image} />
        <View>
          <Text style={[styles.userDataTextName]}>{userprof.name}</Text>
          <Text style={[styles.userDataText]}>{userprof.email}</Text>
          <Text style={[styles.userDataText]}>{userprof.status}</Text>
        </View>
      </View>
      <View style={styles.containerUserCode}>
        <Text style={styles.userCodeTitle}>Código de usuario</Text>
        <Text style={styles.userCodeSubheading}>
          Úsalo para vincular tus cuentas en Crónica
        </Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>XRJ684</Text>
          <Button text="Copiar" color="red" />
        </View>
      </View>
      {role === "classic" && (
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
      )}
    </View>
  );
};

export default Profile;
