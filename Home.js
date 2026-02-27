import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Header */}
      <Text style={styles.logo}>MentorPath AI 🚀</Text>
      <Text style={styles.greeting}>Bem-vinda 👋</Text>

      {/* Meta Atual */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Meta Atual</Text>
        <Text style={styles.cardText}>Aprender Programação Backend</Text>
        <Text style={styles.progress}>Progresso: 42%</Text>
      </View>

      {/* Roadmap */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🗺 Roadmap</Text>
        <Text style={styles.cardText}>✅ Lógica de Programação</Text>
        <Text style={styles.cardText}>⏳ Estruturas de Dados</Text>
        <Text style={styles.cardText}>🔒 APIs REST</Text>
      </View>

      {/* Criar novo plano */}
      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.buttonText}>Gerar Novo Plano com IA</Text>
      </TouchableOpacity>

      {/* Continuar estudo */}
      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Conteudo")}
      >
        <Text style={styles.buttonText}>Continuar Estudo</Text>
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

  logo: {
    fontSize: 20,
    color: "#38BDF8",
    fontWeight: "bold",
    marginBottom: 5,
  },

  greeting: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  cardTitle: {
    color: "#38BDF8",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 16,
  },

  cardText: {
    color: "#CBD5E1",
    marginBottom: 6,
  },

  progress: {
    marginTop: 10,
    color: "#22C55E",
    fontWeight: "bold",
  },

  primaryButton: {
    backgroundColor: "#38BDF8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  secondaryButton: {
    backgroundColor: "#334155",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 40,
  },

  buttonText: {
    color: "#0F172A",
    fontWeight: "bold",
  },
});