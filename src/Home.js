import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Bem-vinda 👋</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meta Atual</Text>
        <Text style={styles.cardText}>Aprender Programação Backend</Text>
      </View>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={styles.cardTitle}>Continuar Estudo</Text>
        <Text style={styles.cardText}>Ir para Estruturas de Dados</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  greeting: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },
  cardTitle: {
    color: "#38BDF8",
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardText: {
    color: "#CBD5E1",
  },
});