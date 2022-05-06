import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const FrequentQuestions = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Text style={styles.title}>Sobre la aplicación</Text>
        <Text style={styles.description}>
          Club Crónica es un club de beneficios totalmente abierto y gratuito.
          Te regalamos Cronipesos para que los utilices como medio de pago en
          los comercios adheridos. Funcionan como dinero real.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Obtener Cronipesos</Text>
        <Text style={styles.description}>
          Recibirás mensualmente un monto de Cronipesos solo por ser parte de
          Club Crónica, totalmente gratis. Utilizalos como parte de pago en tus
          compras en las marcas y comercios adheridos al club. Próximamente
          descubrirás nuevas formas de obtener Cronipesos.
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Pagar con Cronipesos</Text>
        <View>
          <Text style={styles.subtitle}>Pagar online</Text>
          <Text style={styles.description}>
            Aprovechá los beneficios en aplicaciones y tiendas online de los
            distintos comercios o marcas asociadas a Club Crónica.
          </Text>
          <Text style={styles.items}>1. Presioná "Pagar online" o "Ver todos los comercios"</Text>
          <Text style={styles.items}>2. Elegí el comercio o marca de tu interés.</Text>
          <Text style={styles.items}>
            3. Revisă las condiciones de sus códigos, disponibles en la App.
          </Text>
          <Text style={styles.items}>
            4. Presioná "Obtener código para que se copie automáticamente en tu
            smartphone. Se descontarán los Cronipesos correspondientes al código
            utilizado.
          </Text>
          <Text style={styles.items}>
            5. Dirigite a la tienda online del comercio o marca y pegá tu código
            en el campo "código de descuento", "cupón de descuento",
            "promociones" o similar, antes de efectuar tu compra.
          </Text>
          <Text style={styles.items}>
            6. Se aplicará el descuento correspondiente al valor de tu código y
            a las condiciones definidas por el comercio o marca.
          </Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Pagar con QR</Text>
          <Text style={styles.description}>
            Aprovechá los beneficios en sucursales físicas de los distintos
            comercios o marcas asociadas a Club Crónica.
          </Text>
          <Text style={styles.items}>
            1. Revisá las condiciones definidas por el comercio o marca
          </Text>
          <Text style={styles.items}>2. Presioná "Pagar con QR"</Text>
          <Text style={styles.items}>3. Escaneá el código QR del comercio o marca asociada</Text>
          <Text style={styles.items}>
            4. Ingresá el monto de Cronipesos a enviar de acuerdo con las
            condiciones del comercio o marca y presioná "Continuar".
          </Text>
          <Text style={styles.items}>
            5. Revisá que el monto sea el correcto y presioná "Confirmar"
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FrequentQuestions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    marginBottom:10
  },
  subtitle: {
    fontSize: 18,
    marginBottom:10
  },
  description: {
    fontSize: 16,
    marginBottom:10,
    lineHeight:22
  },
  items:{
    fontSize: 14,
    marginBottom:10,
    lineHeight:22
  }
});
