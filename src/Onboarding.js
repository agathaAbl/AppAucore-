import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Onboarding({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MentorPath AI 🚀</Text>

      <Text style={styles.title}>
        Pare de se perder estudando sozinho.
      </Text>

      <Text style={styles.subtitle}>
        Receba um roadmap personalizado com IA.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#38BDF8",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  subtitle: {
    color: "#CBD5E1",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#38BDF8",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
  },
});