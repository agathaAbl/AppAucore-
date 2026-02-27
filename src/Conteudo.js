import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Conteudo() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Estruturas de Dados</Text>

      <Text style={styles.text}>
        Estruturas de dados organizam informações para que possam ser
        acessadas e modificadas de forma eficiente.
      </Text>

      <Text style={styles.subtitle}>Principais tipos:</Text>

      <Text style={styles.text}>• Arrays</Text>
      <Text style={styles.text}>• Listas</Text>
      <Text style={styles.text}>• Pilhas</Text>
      <Text style={styles.text}>• Filas</Text>

      <Text style={styles.text}>
        A IA pode sugerir exercícios práticos e conteúdos externos aqui.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#38BDF8",
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    color: "#CBD5E1",
    marginBottom: 10,
  },
});